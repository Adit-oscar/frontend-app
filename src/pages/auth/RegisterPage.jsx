import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { RegisterForm } from "../../components/composite/RegisterForm";
import { Button, Divider } from "../../components/ui";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password dan Konfirmasi Password tidak cocok!");
      return;
    }
    console.log("Registering user:", formData);
  };

  const handleRegisterWithGoogle = () => {
    // window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <>
      <h4 className="text-slate-500 font-bold mb-4 text-center uppercase">
        REGISTER FORM
      </h4>

      {/* Form Register Manual */}
      <RegisterForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      {/* Divider */}
      <Divider text="or" />

      {/* Google OAuth Register */}
      <div className="space-y-3">
        <Button variant="google" onClick={handleRegisterWithGoogle}>
          <span className="p-3 bg-black/15 flex items-center justify-center">
            <FaGoogle className="text-sm" />
          </span>
          <span className="flex-1 text-center pr-4">REGISTER WITH GOOGLE</span>
        </Button>
      </div>
    </>
  );
};

export default RegisterPage;
