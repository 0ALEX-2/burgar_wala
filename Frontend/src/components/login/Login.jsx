import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <section className="login">
      <motion.button>
        Login with Google
        <FcGoogle />
      </motion.button>
    </section>
  );
};

export default Login;
