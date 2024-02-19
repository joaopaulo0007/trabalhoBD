import { Router } from "express";
import express,{Request,Response} from 'express';
import { connect_mongoDB } from "../banco de dados/banco_config";

const routes=Router()
routes.post('/usuarios', async(req:Request,res:Response)=>{
    const{cpf,nome, data_nascimento}=req.body;
    try {
        let db=await connect_mongoDB();
        await db.collection('usuarios').insertOne({cpf,nome, data_nascimento});
        res.status(201).send('usuario criado com sucesso');
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).send('Erro interno ao criar usuário.');
    }
})
routes.get('/usuarios/:cpf', async (req: Request, res: Response) => {
    const { cpf } = req.params;
    try {
      let db = await connect_mongoDB();  
      const usuario = await db.collection('usuarios').findOne({ cpf:Number(cpf) });
      if (usuario) {
        res.status(200).json(usuario);
      } else {
        res.status(404).send('Usuário não encontrado.');
      }
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      res.status(500).send('Erro interno ao buscar usuário.');
    }
  });
export default routes