import { useState } from "react";
import { supabase } from "../Client";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
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
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });
      if (error) throw error;
      console.log(data);
      toast.success("check your mail for verification link");
    } catch (error) {
      toast.err(error);
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
              <h2>Sign Up Form</h2>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  placeholder="Username"
                  name="fullName"
                  onChange={handleChange}
                />
              </div>
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
                <input type="submit" value="Sign Up" />
              </div>

              <p className={styles.forget}>
                Already have an account?
                <Link to="/">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
