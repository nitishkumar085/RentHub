import styles from "./signup.module.css"
import { User, Mail, Lock, Building2, Users, Wallet, BarChart3 } from "lucide-react"

export default function SignupPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.left}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <Building2 size={28} />
            </div>
            <div>
              <h2>RentMate</h2>
              <p>Rent Management System</p>
            </div>
          </div>

          <div className={styles.hero}>
            <h1>
              Simplify Property Management,
              <span> Save Time &amp; Effort</span>
            </h1>

            <p>
              Manage properties, tenants, rent payments, and expenses
              all in one place with a modern rent management system.
            </p>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Building2 size={22} />
              </div>
              <div>
                <h4>Manage Properties</h4>
                <p>Add and manage all your properties effortlessly.</p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Users size={22} />
              </div>
              <div>
                <h4>Tenant Management</h4>
                <p>Store tenant details and lease information securely.</p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Wallet size={22} />
              </div>
              <div>
                <h4>Rent Collection</h4>
                <p>Track rent payments and get timely notifications.</p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <BarChart3 size={22} />
              </div>
              <div>
                <h4>Reports &amp; Insights</h4>
                <p>Get detailed reports and insights for better decisions.</p>
              </div>
            </div>
          </div>

          <div className={styles.houseIllustration}>
            <div className={styles.houseCard}>
              <Building2 size={120} />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.right}>
          <div className={styles.formWrapper}>
            <div className={styles.avatar}>
              <User size={36} />
            </div>

            <h2>Create Your Account</h2>
            <p className={styles.subtitle}>
              Sign up to get started with RentMate
            </p>

            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <label>Username</label>
                <div className={styles.inputBox}>
                  <User size={18} />
                  <input type="text" placeholder="Enter your username" />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Email Address</label>
                <div className={styles.inputBox}>
                  <Mail size={18} />
                  <input type="email" placeholder="Enter your email" />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Password</label>
                <div className={styles.inputBox}>
                  <Lock size={18} />
                  <input type="password" placeholder="Enter your password" />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Confirm Password</label>
                <div className={styles.inputBox}>
                  <Lock size={18} />
                  <input type="password" placeholder="Confirm your password" />
                </div>
              </div>

              <div className={styles.checkbox}>
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                  I agree to the <a href="#">Terms of Service</a> and
                  <a href="#"> Privacy Policy</a>
                </label>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Create Account
              </button>
            </form>

            <div className={styles.divider}>
              <span>or sign up with</span>
            </div>

            <div className={styles.socialButtons}>
              <button className={styles.socialBtn}>
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                />
                Continue with Google
              </button>

              <button className={styles.socialBtn}>
                <img
                  src="https://www.svgrepo.com/show/448239/microsoft.svg"
                  alt="Microsoft"
                />
                Continue with Microsoft
              </button>
            </div>

            <p className={styles.signin}>
              Already have an account? <a href="/login">Sign in</a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <p>🔒 Your data is safe and secure with us.</p>
      </div>
    </div>
  )
}