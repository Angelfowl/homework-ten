var MODEl = (function () {
    var homeContent = `<section id="home" class="home">
    <div class="home">
      <section class="hero">
        <div class="callout">
          <div class="callout-title"><h2>travel-fly</h2></div>
          <div class="callout-paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur enim quis natus, corporis culpa eum!
            </p>
          </div>
          <div class="callout-button">
            <h3>READ MORE</h3>
          </div>
        </div>
      </section>
      <section class="tours">
        <div class="tour-container">
          <div class="tour-imgs">
            <img src="images/tour-01.jpg" alt="Israel tour" />
            <div class="tour-title">
              <h2>ISREAL</h2>
              <h3>From $1000</h3>
            </div>
            <div class="tour-button">
              <h2>LEARN MORE</h2>
            </div>
          </div>
          <div class="tour-imgs">
            <img src="images/tour-02.jpg" alt="USA tour" />
            <div class="tour-title">
              <h2>U.S.A</h2>
              <h3>From $1500</h3>
            </div>
            <div class="tour-button">
              <h2>LEARN MORE</h2>
            </div>
          </div>
          <div class="tour-imgs">
            <img src="images/tour-03.jpg" alt="Australia Tour" />
            <div class="tour-title">
              <h2>AUSTRALIA</h2>
              <h3>From $1800</h3>
            </div>
            <div class="tour-button">
              <h2>LEARN MORE</h2>
            </div>
          </div>
        </div>
      </section>
      <section class="booking-form">
        <div class="title-book">
          <h2>Booking Form:</h2>
        </div>
        <div class="book-forms">
          <form>
            <div class="top-form">
              <input type="text" placeholder="name..." />
              <input type="email" placeholder="email..." />
              <input type="text" placeholder="country..." />
              <input type="text" placeholder="hotel..." />
            </div>
            <div class="long-input">
              <label for="Check-in">Check-In</label>
              <input type="text" placeholder="5/10/2020" />
            </div>
            <div class="long-input">
              <label for="Check-out">Check-Out</label>
              <input type="text" placeholder="5/20/2020" />
            </div>
            <div class="list-buttons">
              <label for="adults">Adults</label>
              <select name="adults" id="adults">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <label for="kids">Children</label>
              <select name="kids" id="kids">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <label for="rooms">Rooms</label>
              <select name="rooms" id="rooms">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div class="message-box">
              <input type="textarea" placeholder="message..." />
            </div>

            <div class="submitBtn">
              <h2>SUBMIT</h2>
            </div>
          </form>
        </div>
      </section>
    </div>
  </section>`;
    var aboutContent = `<section class="about">
    <div class="top-quote">
      <h1>About:</h1>
      <div class="line-class"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>

    <div class="client-section">
      <div class="title">
        <h2>Client Quotes:</h2>
        <div class="line-class2"></div>
        <div class="client-container">
          <div class="client-pic">
            <img src="images/about-client-01.jpg" alt="Client photos" />
          </div>
          <div class="client-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo.
          </div>
          <div class="author-tag">- Miranda Brown</div>
        </div>

        <div class="client-container">
          <div class="client-pic">
            <img src="images/about-client-02.jpg" alt="client photos" />
          </div>
          <div class="client-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo.
          </div>
          <div class="author-tag">- Johnathan wes</div>
        </div>
      </div>
    </div>
  </section>`;
    var toursContent = `<section class="tour-index">
    <div class="title-header">
      <div class="title-img">
        <div class="overlay"></div>
        <div class="title-text"><h2>Tours</h2></div>
      </div>
    </div>

    <div class="tour-containers">
      <div class="t-container">
        <img src="images/tour-01.jpg" alt="Isreal Tour" />
        <div class="tour-overlay"></div>
        <div class="tour-title">
          <h3>Isreal</h3>
          from $1000
        </div>
        <div class="learn-more"><a id="tour1" href="#">Learn More</a></div>
      </div>
      <div class="t-container">
        <img src="images/tour-02.jpg" alt="USA Tour" />
        <div class="tour-overlay"></div>
        <div class="tour-title">
          <h3>U.S.A</h3>
          from $1500
        </div>
        <div class="learn-more"><a id="tour2" href="#">Learn More</a></div>
      </div>
      <div class="t-container">
        <img src="images/tour-03.jpg" alt="USA Tour" />
        <div class="tour-overlay"></div>
        <div class="tour-title">
          <h3>Australia</h3>
          from $1800
        </div>
        <div class="learn-more"><a id="tour3" href="#">Learn More</a></div>
      </div>
      <div class="t-container">
        <img src="images/tour-04.jpg" alt="USA Tour" />
        <div class="tour-overlay"></div>
        <div class="tour-title">
          <h3>New Zealand</h3>
          from $1200
        </div>
        <div class="learn-more"><a id="tour4" href="#">Learn More</a></div>
      </div>
      <div class="t-container">
        <img src="images/tour-05.jpg" alt="USA Tour" />
        <div class="tour-overlay"></div>
        <div class="tour-title">
          <h3>France</h3>
          from $2500
        </div>
        <div class="learn-more"><a id="tour5" href="#">Learn More</a></div>
      </div>
      <div class="t-container">
        <img src="images/tour-06.jpg" alt="USA Tour" />
        <div class="tour-overlay"></div>
        <div class="tour-title">
          <h3>Egypt</h3>
          from $900
        </div>
        <div class="learn-more"><a id="tour6" href="#">Learn More</a></div>
      </div>
      <div class="t-container">
        <img src="images/tour-07.jpg" alt="USA Tour" />
        <div class="tour-overlay"></div>
        <div class="tour-title">
          <h3>Japan</h3>
          from $1300
        </div>
        <div class="learn-more"><a id="tour7" href="#">Learn More</a></div>
      </div>
      <div class="t-container">
        <img src="images/tour-08.jpg" alt="USA Tour" />
        <div class="tour-overlay"></div>
        <div class="tour-title">
          <h3>Canada</h3>
          from $2000
        </div>
        <div class="learn-more"><a id="tour8" href="#">Learn More</a></div>
      </div>
      <div class="t-container">
        <img src="images/tour-09.jpg" alt="USA Tour" />
        <div class="tour-overlay"></div>
        <div class="tour-title">
          <h3>U.A.E</h3>
          from $3000
        </div>
        <div class="learn-more"><a id="tour9" href="#">Learn More</a></div>
      </div>
    </div>
  </section>`;
  var tour1Content = `<section class="tour-content">
  <div class="tour-hero">
    <img src="images/tour-01.jpg" alt="Isreal Tour" />
    <div class="tour-overlay"></div>
    <div class="tour-title">
      <h1>Isreal Tour Package</h1>
      <div class="promo-text">
        <h3>Starting From $1000 (prices may vary)</h3>
      </div>
    </div>
  </div>

  <div class="promo-img">
    <img src="images/israel-tour/israel-tour-01.jpg" alt="Isreal Tour" />
    <img src="images/israel-tour/israel-tour-02.jpg" alt="Isreal Tour" />
    <img src="images/israel-tour/israel-tour-03.jpg" alt="Isreal Tour" />
  </div>

  <div class="tour-desc">
    <div class="day">
      <h2>Day #1</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
    <div class="day">
      <h2>Day #2</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
    <div class="day">
      <h2>Day #3</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
  </div>

  <div class="bookBtn">
    <div class="book-now">
      <h4>Book Now</h4>
    </div>
  </div>
</section>`;
  var tour2Content = `<section class="tour-content">
  <div class="tour-hero">
    <img src="images/tour-02.jpg" alt="USA Tour" />
    <div class="tour-overlay"></div>
    <div class="tour-title">
      <h1>U.S.A Tour Package</h1>
      <div class="promo-text">
        <h3>Starting From $1500 (prices may vary)</h3>
      </div>
    </div>
  </div>

  <div class="promo-img">
    <img src="images/usa-tour/usa-tour-01.jpg" alt="usa Tour" />
    <img src="images/usa-tour/usa-tour-02.jpg" alt="usa Tour" />
    <img src="images/usa-tour/usa-tour-03.jpg" alt="usa Tour" />
  </div>

  <div class="tour-desc">
    <div class="day">
      <h2>Day #1</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
    <div class="day">
      <h2>Day #2</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
    <div class="day">
      <h2>Day #3</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
  </div>

  <div class="bookBtn">
    <div class="book-now">
      <h4>Book Now</h4>
    </div>
  </div>
</section>`;
  var tour3Content = `<section class="tour-content">
  <div class="tour-hero">
    <img src="images/tour-03.jpg" alt="Australia Tour" />
    <div class="tour-overlay"></div>
    <div class="tour-title">
      <h1>Australia Tour Package</h1>
      <div class="promo-text">
        <h3>Starting From $1800 (prices may vary)</h3>
      </div>
    </div>
  </div>

  <div class="promo-img">
    <img src="images/aus-tour/aus-tour-01.jpg" alt="Australia Tour" />
    <img src="images/aus-tour/aus-tour-02.jpg" alt="Australia Tour" />
    <img src="images/aus-tour/aus-tour-03.jpg" alt="Australia Tour" />
  </div>

  <div class="tour-desc">
    <div class="day">
      <h2>Day #1</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
    <div class="day">
      <h2>Day #2</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
    <div class="day">
      <h2>Day #3</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
  </div>

  <div class="bookBtn">
    <div class="book-now">
      <h4>Book Now</h4>
    </div>
  </div>
</section>`;
  var tour4Content = `<section class="tour-content">
  <div class="tour-hero">
    <img src="images/tour-04.jpg" alt="New Zealand Tour" />
    <div class="tour-overlay"></div>
    <div class="tour-title">
      <h1>New Zealand Package</h1>
      <div class="promo-text">
        <h3>Starting From $1200 (prices may vary)</h3>
      </div>
    </div>
  </div>

  <div class="promo-img">
    <img src="images/nz-tour/nz-tour-01.jpg" alt="New Zealand Tour" />
    <img src="images/nz-tour/nz-tour-02.jpg" alt="New Zealand Tour" />
    <img src="images/nz-tour/nz-tour-03.jpg" alt="New Zealand Tour" />
  </div>

  <div class="tour-desc">
    <div class="day">
      <h2>Day #1</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
    <div class="day">
      <h2>Day #2</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
    <div class="day">
      <h2>Day #3</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
  </div>

  <div class="bookBtn">
    <div class="book-now">
      <h4>Book Now</h4>
    </div>
  </div>
</section>`;
  var tour5Content = `<section class="tour-content">
  <div class="tour-hero">
    <img src="images/tour-05.jpg" alt="France Tour" />
    <div class="tour-overlay"></div>
    <div class="tour-title">
      <h1>France Tour Package</h1>
      <div class="promo-text">
        <h3>Starting From $2500 (prices may vary)</h3>
      </div>
    </div>
  </div>

  <div class="promo-img">
    <img src="images/france-tour/france-tour-01.jpg" alt="France Tour" />
    <img src="images/france-tour/france-tour-02.jpg" alt="France Tour" />
    <img src="images/france-tour/france-tour-03.jpg" alt="France Tour" />
  </div>

  <div class="tour-desc">
    <div class="day">
      <h2>Day #1</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
    <div class="day">
      <h2>Day #2</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
    <div class="day">
      <h2>Day #3</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
  </div>

  <div class="bookBtn">
    <div class="book-now">
      <h4>Book Now</h4>
    </div>
  </div>
</section>`;
  var tour6Content = `<section class="tour-content">
  <div class="tour-hero">
    <img src="images/tour-06.jpg" alt="Egypt Tour" />
    <div class="tour-overlay"></div>
    <div class="tour-title">
      <h1>Egypt Tour Package</h1>
      <div class="promo-text">
        <h3>Starting From $900 (prices may vary)</h3>
      </div>
    </div>
  </div>

  <div class="promo-img">
    <img src="images/egypt-tour/egypt-tour-01.jpg" alt="Egypt Tour" />
    <img src="images/egypt-tour/egypt-tour-02.jpg" alt="Egypt Tour" />
    <img src="images/egypt-tour/egypt-tour-03.jpg" alt="Egypt Tour" />
  </div>

  <div class="tour-desc">
    <div class="day">
      <h2>Day #1</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
    <div class="day">
      <h2>Day #2</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
    <div class="day">
      <h2>Day #3</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
  </div>

  <div class="bookBtn">
    <div class="book-now">
      <h4>Book Now</h4>
    </div>
  </div>
</section>`;
  var tour7Content = `<section class="tour-content">
  <div class="tour-hero">
    <img src="images/tour-07.jpg" alt="Japan Tour" />
    <div class="tour-overlay"></div>
    <div class="tour-title">
      <h1>Japan Tour Package</h1>
      <div class="promo-text">
        <h3>Starting From $1300 (prices may vary)</h3>
      </div>
    </div>
  </div>

  <div class="promo-img">
    <img src="images/japan-tour/japan-tour-01.jpg" alt="Japan Tour" />
    <img src="images/japan-tour/japan-tour-02.jpg" alt="Japan Tour" />
    <img src="images/japan-tour/japan-tour-03.jpg" alt="Japan Tour" />
  </div>

  <div class="tour-desc">
    <div class="day">
      <h2>Day #1</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
    <div class="day">
      <h2>Day #2</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
    <div class="day">
      <h2>Day #3</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
  </div>

  <div class="bookBtn">
    <div class="book-now">
      <h4>Book Now</h4>
    </div>
  </div>
</section>`;
  var tour8Content = `<section class="tour-content">
  <div class="tour-hero">
    <img src="images/tour-08.jpg" alt="Canada Tour" />
    <div class="tour-overlay"></div>
    <div class="tour-title">
      <h1>Canada Tour Package</h1>
      <div class="promo-text">
        <h3>Starting From $2000 (prices may vary)</h3>
      </div>
    </div>
  </div>

  <div class="promo-img">
    <img src="images/canada-tour/canada-tour-01.jpg" alt="Canada Tour" />
    <img src="images/canada-tour/canada-tour-02.jpg" alt="Canada Tour" />
    <img src="images/canada-tour/canada-tour-03.jpg" alt="Canada Tour" />
  </div>

  <div class="tour-desc">
    <div class="day">
      <h2>Day #1</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
    <div class="day">
      <h2>Day #2</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
    <div class="day">
      <h2>Day #3</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
  </div>

  <div class="bookBtn">
    <div class="book-now">
      <h4>Book Now</h4>
    </div>
  </div>
</section>`;
  var tour9Content = `    <section class="tour-content">
  <div class="tour-hero">
    <img src="images/tour-08.jpg" alt="uae Tour" />
    <div class="tour-overlay"></div>
    <div class="tour-title">
      <h1>U.A.E. Tour Package</h1>
      <div class="promo-text">
        <h3>Starting From $3000 (prices may vary)</h3>
      </div>
    </div>
  </div>

  <div class="promo-img">
    <img src="images/uae-tour/uae-tour-01.jpg" alt="UAE Tour" />
    <img src="images/uae-tour/uae-tour-02.jpg" alt="UAE Tour" />
    <img src="images/uae-tour/uae-tour-03.jpg" alt="UAE Tour" />
  </div>

  <div class="tour-desc">
    <div class="day">
      <h2>Day #1</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
    <div class="day">
      <h2>Day #2</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
    <div class="day">
      <h2>Day #3</h2>
      <div class="bottom-line"></div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet.
      </p>
    </div>
  </div>

  <div class="bookBtn">
    <div class="book-now">
      <h4>Book Now</h4>
    </div>
  </div>
</section>`;
    var specialOffersContent = `<section class="specialOffers">
    <div class="special-content">
      <div class="special-title">
        <h1>Special Offer(s):</h1>
      </div>
      <div class="title-line"></div>

      <div class="special-container">
        <img src="images/special-offer-01.jpg" alt="Barcelona" />
        <div class="special-text">
          <div class="special-title">
            <h2>Barcelona, Spain</h2>
            <div class="discount">(20% off!)</div>
          </div>
          <div class="special-line"></div>
          <div class="special-desc">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque
              ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div class="learn-more"><div class="button">Learn More</div></div>
        </div>
      </div>

      <div class="special-container">
        <div class="special-img">
          <img src="images/special-offer-02.jpg" alt="Bangkok" />
        </div>
        <div class="special-text">
          <div class="special-title">
            <h2>Bangkok, Thailand</h2>
            <div class="discount">(10% off!)</div>
          </div>
          <div class="special-line"></div>
          <div class="special-desc">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque
              ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div class="learn-more"><div class="button">Learn More</div></div>
        </div>
      </div>
    </div>
  </section>`;
    var blogContent = `      <section class="blog">
    <div class="blog-header">
      <h1>Blog:</h1>
    </div>
    <div class="blog-line"></div>

    <div class="blog-container">
      <div class="left">
        <div class="date">
          <h2>06</h2>
          <h3>Jun</h3>
        </div>
      </div>

      <div class="right">
        <div class="blog-img">
          <img src="images/blog.jpg" alt="blog picture" />
        </div>
        <div class="blog-title">
          <h3>Sed et persipiatis unde omnis iste</h3>
        </div>
        <div class="blog-desc">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>

    <div class="blog-container">
      <div class="left">
        <div class="date">
          <h2>23</h2>
          <h3>Jul</h3>
        </div>
      </div>

      <div class="right">
        <div class="blog-img">
          <img src="images/blog.jpg" alt="blog picture" />
        </div>
        <div class="blog-title">
          <h3>Sed et persipiatis unde omnis iste</h3>
        </div>
        <div class="blog-desc">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
  </section>`;
    var contactContent = `<section class="contact">
    <div class="contact-header">
      <h1>Contact Us:</h1>
      <div class="contact-line"></div>
    </div>

    <div class="contact-forms">
      <div class="contact-left">
        <div class="map">
          <img src="images/map.png" alt="map" />
        </div>
        <div class="address">
          <p>travel-fly Inc.</p>
          <p>8901 Marmora Road, Glasgow, D04 89GR.</p>
          <p>Freephone:+1 800 559 6580</p>
          <p>Telephone:+1 800 603 6035</p>
          <p>FAX:+1 800 889 9898</p>
          <p>E-mail: mail@travelfly.org</p>
        </div>
      </div>
      <div class="contact-right">
        <div class="contact-form">
          <form>
            <input type="text" class="text-type" placeholder="Your name..." />
            <input
              type="text"
              class="text-type"
              placeholder="Email Address..."
            />
            <input type="text" class="text-type" placeholder="Company" />
            <input
              type="textarea"
              class="message-type"
              placeholder="Message..."
            />
          </form>
          <div class="send-message">
            <div class="button">Send Message</div>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  function initListeners(){
    $("a").click(function(e){
        let btnId = e.currentTarget.id;
        console.log("click " + btnId);
        MODEl.changePageContent(btnId);
    })
}

    var _changePageContent = function(pageName){
      let contentName = pageName + "Content";
      $("#app").html(eval(contentName));
      initListeners();
      


        if (pageName == "home"){
          $("#nav-holder").css("position", "fixed")
          $("#nav-holder").addClass("lightNav");
          $("#nav-holder").removeClass("darkNav");
          $(".logo .travelFlyLogo").attr("src", "images/logo-white.png");
          $(".links a").css("color", "#fff")


        } else {
          $("#nav-holder").css("position", "relative")
          $("#nav-holder").addClass("darkNav");
          $(".logo .travelFlyLogo").attr("src", "images/logo-black.png");
          $(".links a").css("color", "#000")
        
        }

      }
      
        return {
          changePageContent: _changePageContent,
      };

    })();