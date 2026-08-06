
// home page 
import style from './app.module.css'

import Image from 'next/image';

export default function Home() {

  const featuresList = [{icon:'/images/icons/homeicon.png',alt:'homeicon',width:50,height:50, heading:'Property Management',para:'Add and mamage your propeties with ease'},
    {icon:'/images/icons/icon2.png',alt:'homeicon',width:50,height:50, heading:'Tenant Management',para:'store tenant information and lease details securely '},
    {icon:'/images/icons/icon3.png',alt:'homeicon',width:50,height:50, heading:'Rent Collection',para:'Collect rent online,track payments and send receipts instantly.'},
    {icon:'/images/icons/icon4.png',alt:'homeicon',width:50,height:50, heading:'Expense Tracking',para:'Record and categorize expenses to keep your finances clear. '},
    {icon:'/images/icons/icon5.png',alt:'homeicon',width:50,height:50, heading:'Maintenance Requests',para:'Tenants can submit requests and track status in real-time'},
    {icon:'/images/icons/icon6.png',alt:'homeicon',width:50,height:50, heading:'Reports & Insights',para:'Get real-time insights and reports to make smarter decisions'}

  ]

  const genrateFeatureCard = featuresList.map((value,ind)=>{
    return(
       <div className={style.feature} key={ind}>
            <center>
          <Image src={value.icon} alt={value.alt} width={value.width} height={value.height} />
          <h4>{value.heading}</h4>
          <p>{value.para}</p>
          </center>
          </div>
    )
  })

  return (
    <div>
      <section className={style.infoSection}>
        <div className={style.leftSection}>
          <h2>Simplify Rentals.  <br></br> Maximize Values.</h2>
          <p>RentBuddy is an all-in-one rent management system designed for property owners and managers to collect rent , manage tenants ,track expenses and grow your rental business effortlessly. </p>
          <div>
          <button>
            Get Started Free
          </button>
          <button>
            Schedule a Demo
          </button>
          </div>
          

        </div>
        <div className={style.rightSection}>
          <Image src="/images/dashboardview.png" alt="Room" width={800} height={800} />
        </div>

      </section>
      <section className={style.featureSection}>
        <h2>WHY CHOOSE RENT BUDDY</h2>
        <p className={style.featureSectionPara}>Everything You need to manage at one place</p>
        <div className={style.featureCardList}>
         {genrateFeatureCard}
        </div>

      </section>
      <section className={style.workingPrinciple}>
        <h2>HOW IT WORKS</h2>
        <p className={style.featureSectionPara}>Get started in 3 simple steps</p>
        <div className={style.featurePath}>
          <div>
            <div>
                <div className={style.workingPrincipleIconConatiner}>
                  <Image src='/images/icons/work12.png' alt="login" width={50} height={50} />
                   
                </div>
                <div className={style.pathNumber}>1</div>
            </div>
            <h3>Create Your Account </h3>
            <p>Signup in minutes and set up your profile</p>
            </div>
           <div>
           <div>
            <div className={style.workingPrincipleIconConatiner}>
           <Image src='/images/icons/work2.png' alt="login" width={50} height={50} />
            </div>
            <div className={style.pathNumber}>2</div>
            </div>
            <h3>Add your Properties & Tenants </h3>
            <p>Add properties, tenants and lease details in one place.</p>
           </div>
           
            <div>
            <div>
            <div className={style.workingPrincipleIconConatiner}>
            <Image src='/images/icons/work3.png' alt="login" width={50} height={50} /> 
            </div>
            <div className={style.pathNumber}>3</div>
            
            </div>
            <h3>Collect Rent & Stay Oraganized</h3>
            <p>Start collecting rent,track payments, expenses and more.</p>
            </div>
        </div>
      </section>
      <section className={style.subscriptionSection}>
        <center>
        <h2>PRICING</h2>
        <p className={style.featureSectionPara}>Simple ,transparent pricing </p>
        <div className={style.pricingList}>
          <div>
            <h2>Starter</h2>
            <p>Perfect for indivisuals landlords</p>
            <p className={style.pricing}><span>$9</span>&nbsp;&nbsp;&nbsp;/month</p>
            <p>biling annualy</p>
            <ul>
              <li> &#10004; &nbsp;&nbsp;Up to 10 Properties</li>
              <li> &#10004; &nbsp;&nbsp;Tenant Management</li>
               <li> &#10004; &nbsp;&nbsp;Rent Collection</li>
                <li>&#10004; &nbsp;&nbsp;Basic Reports</li>
             </ul>
             <button>Get Started</button>
          </div>
          <div>
            <h2>Professional</h2>
            <p>Ideal for growing property manager</p>
             <p className={style.pricing}><span>$29</span>&nbsp;&nbsp;&nbsp;/month</p>
             <p>biling annualy</p>
             <ul>
              <li> &#10004; &nbsp;&nbsp;Up to 100 Properties</li>
              <li> &#10004; &nbsp;&nbsp;All Starter Featues</li>
              <li>&#10004; &nbsp;&nbsp;Expense Tracking</li>
               <li>&#10004; &nbsp;&nbsp;Maintenance Management</li>
                <li>&#10004; &nbsp;&nbsp;Advanced Reports</li>
             </ul>
               <button>Get Started</button>
          </div>
          <div>
            <h2>Business</h2>
            <p>For large portfolios terms</p>
             <p className={style.pricing}><span>$79</span>&nbsp;&nbsp;&nbsp;/month</p>
             <p>biling annualy</p>
             <ul>
              <li> &#10004; &nbsp;&nbsp;Unlimited Properties</li>
              <li>&#10004; &nbsp;&nbsp;All Professional Features</li>
              <li>&#10004; &nbsp;&nbsp;Muti-user Access</li>
               <li>&#10004; &nbsp;&nbsp;Priority Suport</li>
                <li>&#10004; &nbsp;&nbsp; Custom Reports</li>
             </ul>
               <button>Get Started</button>
          </div>
        </div>
         </center>
      </section>

    </div>
  );
}
