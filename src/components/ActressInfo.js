export default function ActressInfo({ actor, movieRoute }) {
  return (
    <div className="d-flex flex-wrap">
      {/* <Link to={"/" }>
        <button className="btn btn-outline-secondary mt-5 ms-5">بازگشت</button>
      </Link> */}
      <div className="d-flex justify-content-center pt-5">
        <div class="card mb-3 text-end " style={{ maxWidth: " 90%" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={actor.img} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h1 class="card-title">{actor.rName}</h1>
                <p class="card-text fs-5">
                  رادمان محمدی‌نژاد، دانشجوی دانشکده فنی حرفه‌ای باهنر شیراز،
                  متولد سال ۱۳۸۵ است. او با علاقه‌مندی به یادگیری مهارت‌های فنی
                  و حرفه‌ای، در رشته‌ای مرتبط با تکنولوژی و صنعت تحصیل می‌کند.
                  روحیه‌ای خلاق و تلاش‌گر دارد و همواره به دنبال کسب دانش و
                  تجربه‌های جدید در زمینه‌های مورد علاقه خود است. رادمان با
                  پشتکار و انگیزه در مسیر پیشرفت تحصیلی و حرفه‌ای قدم برمی‌دارد
                  و در محیط دانشگاه، به عنوان فردی مسئولیت‌پذیر و پویا شناخته
                  می‌شود.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
