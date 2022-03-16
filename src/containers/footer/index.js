import React from "react";
import { Apple, Facebook, Instagram, Twitter } from "@mui/icons-material";
import InputField from "../../components/Input";
import ButtonComponents from "../../components/Button";
import { Button, Container } from "@mui/material";
import styled from "styled-components";
import CustomizedAccordions from "../../components/Accordion";

const FooterBtn = styled.button`
  background: ${(props) =>
    props.background ? props.background : "rgb(33, 43, 55)"};
  color: ${(props) => (props.color ? props.color : "white")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "0.9375rem")};
  border-radius: 8px;
`;

function Footer(props) {
  return (
    <Container className="mt-[100px] p-0 m-0 pb-8">
      <section className="flex-wrap w-full flex gap-10 lg:flex-nowrap">
        <div className="w-full flex flex-wrap flex-col lg:w-6/12 ">
          <div className="flex flex-col flex-wrap text-footerText">
            <div className="w-20 mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg "
                zwidth="100%"
                height="100%"
                fill="none"
                viewBox="0 0 1080 288"
              >
                <ellipse
                  cx="996"
                  cy="204"
                  fill="#FA541C"
                  rx="60"
                  ry="60"
                ></ellipse>
                <path
                  fill="#212B36"
                  d="M712 264h-58.815l-98.37-148.034V264H496V24h58.815l98.37 148.718V24H712v240zM801.265 70.838v48.547H880v45.128h-78.735v52.649H888V264H744V24h144v46.838h-86.735zM344.333 264c-22 0-42.222-5.118-60.666-15.355-18.223-10.236-32.778-24.478-43.667-42.726-10.667-18.47-16-39.165-16-62.086s5.333-43.505 16-61.752c10.889-18.248 25.444-32.49 43.667-42.726C302.111 29.118 322.333 24 344.333 24s42.111 5.118 60.334 15.355C423.111 49.59 437.556 63.833 448 82.08c10.667 18.247 16 38.831 16 61.752s-5.333 43.616-16 62.086c-10.667 18.248-25.111 32.49-43.333 42.726C386.444 258.882 366.333 264 344.333 264zm0-52.072c18.667 0 33.556-6.231 44.667-18.693 11.333-12.462 17-28.929 17-49.402 0-20.695-5.667-37.163-17-49.402-11.111-12.462-26-18.692-44.667-18.692-18.889 0-34 6.12-45.333 18.358-11.111 12.24-16.667 28.818-16.667 49.736 0 20.696 5.556 37.274 16.667 49.736 11.333 12.239 26.444 18.359 45.333 18.359zM89.71 216.137H192V264H24v-44.444L125.613 71.863H24V24h168v44.444L89.71 216.137z"
                ></path>
              </svg>
            </div>
            <p className="md:max-w-sm">
              The starting point for your next project based on
              easy-to-customize Material-UI © helps you build apps faster and
              better.
            </p>
          </div>
          <div className="py-8">
            <p className="font-semibold text-lg">Social</p>
            <div className="p-3 flex gap-3 pt-6 text-primary ">
              <Facebook />
              <Instagram />
              <Instagram />
              <Twitter />
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold">Documentation</p>
            <ul className="text-footerText">
              <li className="pt-3">
                <a>Documentation</a>
              </li>
              <li className="pt-3">
                <a>Changelog</a>
              </li>
              <li className="pt-3">
                <a>Contributing</a>
              </li>
            </ul>
          </div>
          <div className="py-8">
            <p className="text-lg font-semibold pt-3">Let's stay in touch</p>
            <p className="md: max-w-sm pt-3 text-footerText">
              Ubscribe to our newsletter to receive latest articles to your
              inbox weekly.
            </p>
          </div>
          <div className="bg-inputcolor flex rounded-lg p-1 max-w-md">
            <InputField placeholder="Email address" />
            <ButtonComponents text="Subscribe" />
          </div>
          <div>
            <p className="text-lg font-semibold pt-3">Apps</p>
            <div className="flex gap-5 pt-8">
              <FooterBtn
                background={props.background}
                color={props.color}
                fontSize={props.fontSize}
              >
                <Button variant="color:white">
                  <div className="flex items-center">
                    <Apple />
                    <div>
                      <p className="text-footerText">Download On the</p>
                      <p className="text-white">Apple Store</p>
                    </div>
                  </div>
                </Button>
              </FooterBtn>
              <FooterBtn
                background={props.background}
                color={props.color}
                fontSize={props.fontSize}
              >
                <Button variant="color:white">
                  <div className="flex items-center">
                    <Apple />
                    <div>
                      <p className="text-footerText">Download On the</p>
                      <p className="text-white">Apple Store</p>
                    </div>
                  </div>
                </Button>
              </FooterBtn>
            </div>
          </div>
        </div>
        <div className="w-full lg:flex flex-wrap hidden lg:w-6/12">
          <div className="flex flex-wrap w-6/12">
            <div className="w-6/12 flex flex-wrap">
              <ul>
                <li className="text-lg font-semibold">Marketing</li>
                <li className="text-footerText pt-3">
                  <a>Landing</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Services</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Case Studies</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Case Study</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Blog Posts</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Blog Post</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>About</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <div className="w-6/12 flex flex-wrap">
              <ul>
                <li className="text-lg font-semibold">Marketing</li>
                <li className="text-footerText pt-3">
                  <a>Landing</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Jobs</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Job</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Blog Posts</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Blog Post</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>About</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <div className="w-6/12 flex flex-wrap">
              <ul>
                <li className="text-lg font-semibold">Marketing</li>
                <li className="text-footerText pt-3">
                  <a>Landing</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Jobs</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Job</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Blog Posts</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Blog Post</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>About</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <div className="w-6/12 flex flex-wrap">
              <ul>
                <li className="text-lg font-semibold">Marketing</li>
                <li className="text-footerText pt-3">
                  <a>Landing</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Jobs</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Job</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Blog Posts</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Blog Post</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>About</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-6/12 flex flex-wrap">
            <div>
              <ul>
                <li className="text-lg font-semibold">Marketing</li>
                <li className="text-footerText pt-3">
                  <a>Login</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Login Cover</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Register</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Register Cover</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Reset Password</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Verify Code</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>404 Error</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>500 Error</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Maintenance</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>ComingSoon</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Pricing 01</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Pricing 02</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Checkout</a>
                </li>
                <li className="text-footerText pt-3">
                  <a>Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full lg:hidden">
          <CustomizedAccordions />
        </div>
      </section>
    </Container>
  );
}
export default Footer;
