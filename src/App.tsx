import React, { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, ArrowLeft, User, Key } from 'lucide-react';

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [view, setView] = useState<'login' | 'signup' | 'forgot'>('login');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (view === 'login') {
        // Simulate login API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Login:', { email, password });
      } else if (view === 'signup') {
        // Simulate signup API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Signup:', { name, email, password });
      } else if (view === 'forgot') {
        // Simulate password reset API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Password reset email sent to:', email);
        alert('If an account exists with this email, you will receive password reset instructions.');
        setView('login');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const renderLoginForm = () => (
    <form onSubmit={handleSubmit} className="animate-fadeIn">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <Mail className="w-4 h-4 text-base-content/60" />
          <input
            type="email"
            placeholder="your@email.com"
            className="grow"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>

      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">Password</span>
          <button 
            type="button" 
            className="label-text-alt link link-primary"
            onClick={() => setView('forgot')}
          >
            Forgot password?
          </button>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <Lock className="w-4 h-4 text-base-content/60" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="grow"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="btn btn-ghost btn-circle btn-sm"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </label>
      </div>

      <div className="form-control mt-4">
        <label className="label cursor-pointer">
          <span className="label-text">Remember me</span>
          <input type="checkbox" className="checkbox checkbox-primary" />
        </label>
      </div>

      <button 
        className={`btn btn-primary w-full mt-6 ${isLoading ? 'loading' : ''}`} 
        type="submit"
        disabled={isLoading}
      >
        Sign In
      </button>
    </form>
  );

  const renderSignupForm = () => (
    <form onSubmit={handleSubmit} className="animate-fadeIn">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Full Name</span>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <User className="w-4 h-4 text-base-content/60" />
          <input
            type="text"
            placeholder="John Doe"
            className="grow"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>

      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <Mail className="w-4 h-4 text-base-content/60" />
          <input
            type="email"
            placeholder="your@email.com"
            className="grow"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>

      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <Key className="w-4 h-4 text-base-content/60" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            className="grow"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
          />
          <button
            type="button"
            className="btn btn-ghost btn-circle btn-sm"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </label>
      </div>

      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">Confirm Password</span>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <Lock className="w-4 h-4 text-base-content/60" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm your password"
            className="grow"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
      </div>

      <button 
        className={`btn btn-primary w-full mt-6 ${isLoading ? 'loading' : ''}`}
        type="submit"
        disabled={isLoading || password !== confirmPassword}
      >
        Create Account
      </button>
    </form>
  );

  const renderForgotPasswordForm = () => (
    <form onSubmit={handleSubmit} className="animate-fadeIn">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <Mail className="w-4 h-4 text-base-content/60" />
          <input
            type="email"
            placeholder="your@email.com"
            className="grow"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>

      <button 
        className={`btn btn-primary w-full mt-6 ${isLoading ? 'loading' : ''}`}
        type="submit"
        disabled={isLoading}
      >
        Send Reset Instructions
      </button>
    </form>
  );

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Back Button for Signup and Forgot Password views */}
          {view !== 'login' && (
            <button
              onClick={() => setView('login')}
              className="btn btn-ghost btn-sm self-start mb-4 gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </button>
          )}

          {/* Header */}
          <div className="text-center mb-8 animate-fadeIn">
            <h1 className="text-4xl font-bold text-primary mb-2">
              {view === 'login' && 'Welcome Back'}
              {view === 'signup' && 'Create Account'}
              {view === 'forgot' && 'Reset Password'}
            </h1>
            <p className="text-base-content/60">
              {view === 'login' && 'Sign in to continue to your account'}
              {view === 'signup' && 'Fill in your information to get started'}
              {view === 'forgot' && 'Enter your email to receive reset instructions'}
            </p>
          </div>

          {/* Forms */}
          {view === 'login' && renderLoginForm()}
          {view === 'signup' && renderSignupForm()}
          {view === 'forgot' && renderForgotPasswordForm()}

          {/* Footer */}
          {view === 'login' && (
            <>
              <div className="divider my-6">OR</div>
              <div className="text-center animate-fadeIn">
                <p className="text-base-content/60">
                  Don't have an account?{' '}
                  <button 
                    onClick={() => setView('signup')} 
                    className="link link-primary"
                  >
                    Sign up
                  </button>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;