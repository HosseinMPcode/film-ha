import "./../styles/Footer.css";

function Footer() {
  return (
    <foote
      dir="rtl"
      className="footer d-flex justify-content-around align-items-center text-light"
    >
      <p className="w-50">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود
      </p>
      <p className="border rounded p-3 ">
        شیراز سه راه دارالرحمه دانشکده شهید باهنر
      </p>
    </foote>
  );
}

export default Footer;
