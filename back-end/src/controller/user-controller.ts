import type { Request, Response } from "express";
import { prisma } from "../db.js";
import bcrypt from "bcrypt";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const match = await bcrypt.compare(password, user?.password);

    if (!match) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res
      .status(200)
      .json({ id: user.id, name: user.name, email: user.email, cep: user.cep });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, cep } = req.body;

    if (!name || !email || !password || !cep) {
      return res
        .status(400)
        .json({ message: "Todas os campos são obrigatórios" });
    }

    const hash = await bcrypt.hash(password, 10);

    // console.log(hash);

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (user) {
      return res.status(409).json({ message: "E-mail já cadastrado" });
    }

    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hash,
        cep: cep,
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: "Erro no servidor" });
  }
};
