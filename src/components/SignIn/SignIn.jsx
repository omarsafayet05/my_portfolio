import { useState } from "react";
import { supabase } from "../Client";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import styles from "./SignIn.module.css";

// eslint-disable-next-line react/prop-types
const SignIn = ({ setToken }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      console.log(data);
      navigate("/Portfoliopage");

      {
        setToken(data);
      }
      toast.success("Succesfully Login");
    } catch (error) {
      toast.error("Login failed!");
    }
  }
  return (
    <div>
      <section id={styles.gradient_bg}>
        <div className={styles.color}></div>
        <div className={styles.color}></div>
        <div className={styles.color}></div>
        <div className={styles.box}>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <h2>Sign In Form</h2>

              <div className={styles.inputBox}>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputBox}>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputBox}>
                <input type="submit" value="Sign In" />
              </div>

              <p className={styles.forget}>
                Don&#39;t have an account?
                <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
