import Link from "next/link";

import Container from "../Container";
import Logo from "../Logo";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";

import {
  QUICK_LINKS,
  SERVICES,
} from "@/constants/footer";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300">
      <Container>
        <div className="grid gap-12 py-20 md:grid-cols-2 xl:grid-cols-4">

          {/* Logo */}
          <div>
            <Logo />

            <p className="mt-6 leading-8 text-zinc-400">
              Click & Cut Studio captures unforgettable
              moments through premium photography,
              videography and creative storytelling.
            </p>

            <FooterSocial />
          </div>

          {/* Links */}
          <FooterLinks
            title="Quick Links"
            links={QUICK_LINKS}
          />

          {/* Services */}
          <div>
            <h3 className="mb-6 font-heading text-xl font-semibold">
              Services
            </h3>

            <ul className="space-y-4">
              {SERVICES.map((service) => (
                <li
                  key={service}
                  className="text-zinc-400"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 font-heading text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-zinc-400">
              <p>📍 Dhaka, Bangladesh</p>
              <p>📧 hello@clickandcutstudio.com</p>
              <p>📞 +880 1935-451484</p>
            </div>
          </div>

        </div>

        <div className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Click & Cut Studio.
          All rights reserved.
        </div>
      </Container>
    </footer>
  );
}