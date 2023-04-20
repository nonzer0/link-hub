import { useState } from "react";
import useSupabase from "@/hooks/supabase";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const client = useSupabase();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await client.auth.signInWithOtp({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row flex-center flex">
      <div className="col-6 form-widget" aria-live="polite">
        <h1 className="header">Linq Vault</h1>
        <p className="description">
          Sign in via magic link with your email below
        </p>
        {loading ? (
          "Sending magic link..."
        ) : (
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="block text-gray-700 text-sm font-bold mb-2"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Send magic link
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
