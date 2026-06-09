"use client";
import { useState } from "react";
import { AiFillFileText, AiFillBulb, AiFillAudio } from "react-icons/ai";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiCrown } from "react-icons/bi";
import { RiLeafLine } from "react-icons/ri";
import landing from "../../public/landing.png";
import LoginModule from "@/Components/LoginModule";
import Image from "next/image";
export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="wrapper">
      <main id="main-content">
        <section id="landing" aria-labelledby="landing-heading">
          <div className="container">
            <div className="row">
              <div className="landing__wrapper">
                <div className="landing__content">
                  <h1 className="landing__content__title" id="landing-heading">
                    Gain more knowledge <br className="remove--tablet" />
                    in less time
                  </h1>
                  <p className="landing__content__subtitle">
                    Great summaries for busy people,
                    <br className="remove--tablet" />
                    individuals who barely have time to read,
                    <br className="remove--tablet" />
                    and even people who don’t like to read.
                  </p>
                  <button className="btn home__cta--btn" onClick={() => setIsOpen(true)}>
                    Login
                  </button>
                  {isOpen && <LoginModule isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
                <figure className="landing__image--mask">
                  <Image src={landing} alt="Summarist app preview" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section id="features" aria-labelledby="features-heading">
          <div className="container">
            <div className="row">
              <h2 className="section__title" id="features-heading">
                Understand books in few minutes
              </h2>
              <div className="features__wrapper">
                <article className="features">
                  <div className="features__icon" aria-hidden="true">
                    <AiFillFileText />
                  </div>
                  <h3 className="features__title">Read or listen</h3>
                  <p className="features__sub--title">
                    Save time by getting the core ideas from the best books.
                  </p>
                </article>
                <article className="features">
                  <div className="features__icon" aria-hidden="true">
                    <AiFillBulb />
                  </div>
                  <h3 className="features__title">Find your next read</h3>
                  <p className="features__sub--title">
                    Explore book lists and personalized recommendations.
                  </p>
                </article>
                <article className="features">
                  <div className="features__icon" aria-hidden="true">
                    <AiFillAudio />
                  </div>
                  <h3 className="features__title">Briefcasts</h3>
                  <p className="features__sub--title">
                    Gain valuable insights from briefcasts
                  </p>
                </article>
              </div>

              <div className="statistics__wrapper">
                <div className="statistics__content--header">
                  <h3 className="statistics__heading">Enhance your knowledge</h3>
                  <h3 className="statistics__heading">Achieve greater success</h3>
                  <h3 className="statistics__heading">Improve your health</h3>
                  <h3 className="statistics__heading">
                    Develop better parenting skills
                  </h3>
                  <h3 className="statistics__heading">Increase happiness</h3>
                  <h3 className="statistics__heading">
                    Be the best version of yourself!
                  </h3>
                </div>
                <div className="statistics__content--details">
                  <div className="statistics__data">
                    <div className="statistics__data--number">93%</div>
                    <p className="statistics__data--title">
                      of Summarist members <b>significantly increase</b> reading
                      frequency.
                    </p>
                  </div>
                  <div className="statistics__data">
                    <div className="statistics__data--number">96%</div>
                    <p className="statistics__data--title">
                      of Summarist members <b>establish better</b> habits.
                    </p>
                  </div>
                  <div className="statistics__data">
                    <div className="statistics__data--number">90%</div>
                    <p className="statistics__data--title">
                      have made <b>significant positive</b> change to their lives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="statistics__wrapper">
                <div
                  className="statistics__content--details statistics__content--details-second"
                >
                  <div className="statistics__data">
                    <div className="statistics__data--number">91%</div>
                    <p className="statistics__data--title">
                      of Summarist members <b>report feeling more productive</b>
                      after incorporating the service into their daily routine.
                    </p>
                  </div>
                  <div className="statistics__data">
                    <div className="statistics__data--number">94%</div>
                    <p className="statistics__data--title">
                      of Summarist members have <b>noticed an improvement</b> in
                      their overall comprehension and retention of information.
                    </p>
                  </div>
                  <div className="statistics__data">
                    <div className="statistics__data--number">88%</div>
                    <p className="statistics__data--title">
                      of Summarist members <b>feel more informed</b> about current
                      events and industry trends since using the platform.
                    </p>
                  </div>
                </div>
                <div
                  className="statistics__content--header statistics__content--header-second"
                >
                  <h3 className="statistics__heading">Expand your learning</h3>
                  <h3 className="statistics__heading">Accomplish your goals</h3>
                  <h3 className="statistics__heading">Strengthen your vitality</h3>
                  <h3 className="statistics__heading">Become a better caregiver</h3>
                  <h3 className="statistics__heading">Improve your mood</h3>
                  <h3 className="statistics__heading">Maximize your abilities</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" aria-labelledby="reviews-heading">
          <div className="row">
            <div className="container">
              <h2 className="section__title" id="reviews-heading">
                What our members say
              </h2>
              <div className="reviews__wrapper">
                <article className="review">
                  <div className="review__header">
                    <div className="review__name">Hanna M.</div>
                    <div className="review__stars">
                      <span className="visually-hidden">5 out of 5 stars</span>
                      <BsStarFill aria-hidden="true" />
                    </div>
                  </div>
                  <p className="review__body">
                    This app has been a <b>game-changer</b> for me! It&apos;s saved me so
                    much time and effort in reading and comprehending books. Highly
                    recommend it to all book lovers.
                  </p>
                </article>
                <article className="review">
                  <div className="review__header">
                    <div className="review__name">David B.</div>
                    <div className="review__stars">
                      <span className="visually-hidden">5 out of 5 stars</span>
                      <BsStarFill aria-hidden="true" />
                    </div>
                  </div>
                  <p className="review__body">
                    I love this app! It provides
                    <b>concise and accurate summaries</b> of books in a way that is
                    easy to understand. It&apos;s also very user-friendly and intuitive.
                  </p>
                </article>
                <article className="review">
                  <div className="review__header">
                    <div className="review__name">Nathan S.</div>
                    <div className="review__stars">
                      <span className="visually-hidden">5 out of 5 stars</span>
                      <BsStarFill aria-hidden="true" />
                    </div>
                  </div>
                  <p className="review__body">
                    This app is a great way to get the main takeaways from a book
                    without having to read the entire thing.
                    <b>The summaries are well-written and informative.</b>
                    Definitely worth downloading.
                  </p>
                </article>
                <article className="review">
                  <div className="review__header">
                    <div className="review__name">Ryan R.</div>
                    <div className="review__stars">
                      <span className="visually-hidden">5 out of 5 stars</span>
                      <BsStarFill aria-hidden="true" />
                    </div>
                  </div>
                  <p className="review__body">
                    If you&apos;re a busy person who
                    <b>loves reading but doesn&apos;t have the time</b> to read every
                    book in full, this app is for you! The summaries are thorough
                    and provide a great overview of the book&apos;s content.
                  </p>
                </article>
              </div>

              <div className="reviews__btn--wrapper">
                <button className="btn home__cta--btn" onClick={() => setIsOpen(true)}>
                  Login
                </button>
                {isOpen && <LoginModule isOpen={isOpen} setIsOpen={setIsOpen} />}
              </div>
            </div>
          </div>
        </section>

        <section id="numbers" aria-labelledby="numbers-heading">
          <div className="container">
            <div className="row">
              <h2 className="section__title" id="numbers-heading">
                Start growing with Summarist now
              </h2>
              <div className="numbers__wrapper">
                <article className="numbers">
                  <div className="numbers__icon" aria-hidden="true">
                    <BiCrown />
                  </div>
                  <h3 className="numbers__title">3 Million</h3>
                  <p className="numbers__sub--title">Downloads on all platforms</p>
                </article>
                <article className="numbers">
                  <div className="numbers__icon numbers__star--icon" aria-hidden="true">
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                  <h3 className="numbers__title">4.5 Stars</h3>
                  <p className="numbers__sub--title">
                    Average ratings on iOS and Google Play
                  </p>
                </article>
                <article className="numbers">
                  <div className="numbers__icon" aria-hidden="true">
                    <RiLeafLine />
                  </div>
                  <h3 className="numbers__title">97%</h3>
                  <p className="numbers__sub--title">
                    Of Summarist members create a better reading habit
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
