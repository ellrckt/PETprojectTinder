import React, { useState } from "react";
import { Link } from "react-router-dom";

import reqService from "../API/RequestService";
import Button from "./UI/Button";
import Input from "./UI/Input";

function RegistForm() {
   const [username, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [repeatPassword, setRepeatPassword] = useState("");

   async function registUser(username, email, password, repeatPassword) {
      await reqService.post("/registration", {
         username: username,
         email: email,
         password: password,
         repit_password: repeatPassword,
      });
   }

   return (
      <form className="max-w-md mx-auto bg-white rounded-md shadow-lg p-8">
         <h1 className="text-2xl font-bold text-gray-800 mb-8 text-left">
            Регистрация
         </h1>

         <Input
            placeholder="Имя"
            value={username}
            onChange={(e) => setName(e.target.value)}
         />

         <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />

         <Input
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />

         <Input
            placeholder="Повторите пароль"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
         />

         <Button
            onClick={(e) => {
               e.preventDefault();
               registUser(username, email, password, repeatPassword)
            }}
         >
            Регистрация
         </Button>
         <div className="text-center mt-4">
            <span className="text-gray-600">Уже зарегистрированы? </span>
            <Link
               to="/login"
               className="text-purple-500 hover:text-purple-700 font-medium"
            >
               Войдите здесь
            </Link>
         </div>
      </form>
   );
}

export default RegistForm;
