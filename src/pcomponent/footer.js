import './style/footer.css';
const Footer = () => {
  return (
    <div className="footer container">
        <div className="footer-section">
            <p className="title">FoodHub.com</p>
            <p className='mm'>FoodHub is a place here you can please your soul and tummy with delicious food recipes of all cuisine and our services are absolutely free.</p>
            <p>&copy;2023 | Kalsar Ali<br/>All Rights Reserved</p>
        </div>
        <div className="footer-section">
            <p className="title">Contact Us</p>
            <p>info@foodhub.com</p>
            <p>9870698361</p>
            <p>Noida</p>
        </div>
        <div className="footer-section">
            <p className="title">Socials</p>
            <p className="flink">Linkedin</p>
            <p className="flink">Facebook</p>
            <p className="flink">Instagram</p>
            <p className="flink">Twitter</p>
        </div>
    </div>
  )
}
export default Footer
