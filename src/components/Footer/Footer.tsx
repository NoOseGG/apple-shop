import React from "react";

import styles from "./Footer.module.css";
import Container from "../Container/Container";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__inner}>
          <div className={styles.top}>
            <div className={styles.info}>
              <svg
                width="66"
                height="23"
                viewBox="0 0 66 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1826 16.08C13.1266 17.352 8.016 17.5 6.096 17.5C2.304 17.5 0 15.052 0 11.5C0 7.972 2.328 5.524 6.096 5.524C7.92 5.524 13.1746 6.72 14.2306 7.992L8.832 9.484C8.064 8.644 7.224 8.308 6.096 8.308C4.488 8.308 3.096 9.604 3.096 11.5C3.096 13.564 4.392 14.716 6.096 14.716C7.104 14.716 8.256 14.332 8.88 13.54L14.1826 16.08Z"
                  fill="white"
                />
                <path
                  d="M28.8035 6.312L21.8195 22.872H18.3875L20.6195 17.712L15.7955 6.312H19.2035L21.6035 12.408L22.2995 14.592L22.9715 12.408L25.3715 6.312H28.8035Z"
                  fill="white"
                />
                <path
                  d="M36.6494 8.856C34.9214 8.856 33.6734 10.176 33.6734 11.976C33.6734 13.752 34.9214 15.072 36.6494 15.072C38.3294 15.072 39.4814 13.824 39.4814 11.976C39.4814 10.104 38.3294 8.856 36.6494 8.856ZM30.6734 17.592V0H33.7214V6.264L33.6734 7.08C34.1774 6.408 35.7134 6.024 36.7694 6.024C40.5374 6.024 42.6495 8.784 42.6495 11.976C42.6495 15.576 40.4894 17.904 36.7694 17.904C35.8574 17.904 34.3934 17.472 33.7934 16.752L33.8174 17.4V17.592H30.6734Z"
                  fill="white"
                />
                <path
                  d="M55.3377 16.152C54.4497 17.304 52.4098 18 50.6578 18C46.8418 18 44.7058 15.384 44.7058 12C44.7058 8.544 46.8178 6.024 50.5378 6.024C54.2338 6.024 56.3457 8.544 56.3457 12C56.3457 12.384 56.3457 12.624 56.3217 12.96H47.8258C47.9938 14.376 49.0498 15.264 50.6578 15.264C51.8098 15.264 52.8897 14.88 53.5617 14.136L55.3377 16.152ZM47.8738 10.896H53.1537C53.0097 9.624 51.9538 8.76 50.5378 8.76C49.1218 8.76 47.9938 9.624 47.8738 10.896Z"
                  fill="white"
                />
                <path
                  d="M64.7516 9.144C64.1276 8.928 63.5756 8.856 62.9276 8.856C62.4956 8.856 62.1356 8.88 61.7996 9.024V17.592H58.7036V6.816C59.6396 6.336 61.2476 6 62.8076 6C63.4796 6 64.6796 6.072 65.3996 6.336L64.7516 9.144Z"
                  fill="white"
                />
              </svg>

              <div className={styles.info__text}>
                We are a residential interior design firm located in Portland.
                Our boutique-studio offers more than
              </div>
            </div>

            <div className={styles.services}>
              <div className={styles.block__title}>Services</div>
              <ul className={styles.block__list}>
                <li className={styles.block__item}>Bonus program</li>
                <li className={styles.block__item}>Gift cards</li>
                <li className={styles.block__item}>Credit and payment</li>
                <li className={styles.block__item}>Service contracts</li>
                <li className={styles.block__item}>Non-cash account</li>
                <li className={styles.block__item}>Payment</li>
              </ul>
            </div>

            <div className={styles.services}>
              <div className={styles.block__title}>Assistance to the buyer</div>
              <ul className={styles.block__list}>
                <li className={styles.block__item}>Find an order</li>
                <li className={styles.block__item}>Terms of delivery</li>
                <li className={styles.block__item}>
                  Exchange and return of goods
                </li>
                <li className={styles.block__item}>Guarantee</li>
                <li className={styles.block__item}>
                  Frequently asked questions
                </li>
                <li className={styles.block__item}>
                  Terms of use of the siteli
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.bottom}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 2.91193C15.4121 3.17965 14.7791 3.3607 14.1152 3.4416C14.7932 3.02556 15.3135 2.36588 15.5586 1.58004C14.9238 1.96525 14.2222 2.2455 13.4728 2.39573C12.8755 1.74183 12.0218 1.3335 11.0771 1.3335C9.26548 1.3335 7.79574 2.84066 7.79574 4.69933C7.79574 4.9632 7.82391 5.21938 7.88026 5.46592C5.15208 5.32531 2.73381 3.98668 1.11381 1.94792C0.831132 2.44677 0.669596 3.02556 0.669596 3.64191C0.669596 4.80912 1.24905 5.83958 2.12995 6.4434C1.59277 6.42703 1.08563 6.27391 0.642365 6.02352V6.06493C0.642365 7.69632 1.77402 9.0571 3.27663 9.36527C3.00147 9.44424 2.71128 9.48373 2.41169 9.48373C2.20039 9.48373 1.99378 9.46351 1.79374 9.42402C2.21166 10.7607 3.42313 11.7344 4.86001 11.7604C3.7368 12.6637 2.32059 13.202 0.783234 13.202C0.518398 13.202 0.256383 13.1866 0 13.1558C1.45284 14.1092 3.17896 14.6668 5.03187 14.6668C11.0705 14.6668 14.3715 9.53862 14.3715 5.09033C14.3715 4.94394 14.3687 4.79756 14.3631 4.65407C15.0045 4.17929 15.5614 3.58702 16 2.91193Z"
                fill="white"
              />
            </svg>
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.18082 3.81794C9.18082 3.98169 9.18082 4.51541 9.18082 5.27366H11.7878L11.5052 7.59763H9.18082C9.18082 11.1816 9.18082 15.9843 9.18082 15.9843H6.09563C6.09563 15.9843 6.09563 11.2452 6.09563 7.59763H4.48804V5.27366H6.09563C6.09563 4.35204 6.09563 3.69669 6.09563 3.51422C6.09563 2.64485 6.03013 2.23235 6.39954 1.55866C6.76913 0.885005 7.81163 -0.00543266 9.61472 0.0160048C11.4183 0.0382236 12.1785 0.211724 12.1785 0.211724L11.7878 2.6885C11.7878 2.6885 10.6362 2.38441 10.0709 2.49279C9.50635 2.60119 9.18082 2.94894 9.18082 3.81794Z"
                fill="white"
              />
            </svg>

            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5504 3.358C11.891 2.59144 11.5456 1.60104 11.5731 0.592723L9.10925 0.533203C9.10925 0.533203 9.10925 0.638323 9.10925 0.780083V10.6602C9.14365 13.786 4.20509 13.7102 4.59581 10.2551C4.83469 8.88136 6.31085 8.03592 7.62253 8.51384V5.99992C4.76685 5.50264 2.06061 7.7756 2.08909 10.6713C2.33869 16.9513 11.3461 16.9521 11.596 10.6713C11.5331 10.4465 11.5683 6.26152 11.5593 5.90856C12.6797 6.60568 13.9832 6.95416 15.3033 6.90952V4.3132C14.0829 4.3132 13.1515 3.98872 12.5504 3.358Z"
                fill="white"
              />
            </svg>

            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2615_1692)">
                <path
                  d="M7.99992 14.6668C6.57042 14.6668 5.54174 14.6661 4.73972 14.5883C3.94689 14.5115 3.43972 14.3638 3.03497 14.1095C2.57237 13.8188 2.1812 13.4277 1.89052 12.9651C1.63628 12.5604 1.4885 12.0532 1.41174 11.2604C1.33396 10.4583 1.33325 9.42966 1.33325 8.00016C1.33325 6.57067 1.33396 5.54198 1.41174 4.73996C1.4885 3.94713 1.63628 3.43996 1.89052 3.03521C2.18119 2.5726 2.57236 2.18143 3.03497 1.89077C3.43972 1.63653 3.94689 1.48875 4.73972 1.41198C5.54164 1.3342 6.57032 1.3335 7.99992 1.3335C9.42941 1.3335 10.4581 1.3342 11.2601 1.41198C12.0529 1.48875 12.5601 1.63653 12.9649 1.89077C13.4274 2.18144 13.8186 2.57261 14.1092 3.03521C14.3636 3.43996 14.5112 3.94713 14.5881 4.73996C14.6659 5.54198 14.6666 6.57067 14.6666 8.00016C14.6666 9.42966 14.6659 10.4583 14.5881 11.2604C14.5112 12.0532 14.3636 12.5604 14.1092 12.9651C13.8186 13.4277 13.4274 13.8188 12.9649 14.1095C12.5601 14.3638 12.0529 14.5115 11.2601 14.5883C10.4581 14.6661 9.42941 14.6668 7.99992 14.6668Z"
                  fill="white"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M7.99992 11.3333C9.47268 11.3333 10.6666 10.1394 10.6666 8.66667C10.6666 7.19391 9.47268 6 7.99992 6C6.52716 6 5.33325 7.19391 5.33325 8.66667C5.33325 10.1394 6.52716 11.3333 7.99992 11.3333Z"
                  fill="white"
                  stroke="black"
                  stroke-width="2"
                />
                <path
                  d="M11.25 5.5C11.6642 5.5 12 5.16421 12 4.75C12 4.33579 11.6642 4 11.25 4C10.8358 4 10.5 4.33579 10.5 4.75C10.5 5.16421 10.8358 5.5 11.25 5.5Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_2615_1692">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
