import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
import hub from "../assets/images/hub.svg";

export const FeaturesDiagonal = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-bgDark2">
 
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="2xl:w-[1150px] xl:w-[1050px] md:w-4/5 flex justify-center bg-bgDark2 pb-20 lg:pb-20 mx-auto lg:flex-row flex-col">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="block-subtitle"
            >
              Where connections happen
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-10 mb-8 text-2xl lg:text-3xl block-big-title"
            >
              Angor Hub
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16 text-secondaryText leading-loose"
            >
              Angor Hub is a Nostr client built around the Angor
              protocol, offering tools to explore crowdfunding projects, connect
              with investors, and engage directly with founders. Whether you're
              seeking investment opportunities or funding for your project,
              Angor Hub provides secure messaging, project pages, and group
              channels for seamless interaction within a decentralized
              environment.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[210px] h-12 contained-button mr-10 transition-all duration-300"
              onClick={() => window.open("https://hub.angor.io", "_blank")}
              aria-label="Angor Hub"
            >
              Angor Hub
            </motion.button>
          </div>
          <div className="w-3/5 lg:w-1/3 lg:pl-16 justify-center mx-auto pt-16 lg:pt-0 hidden lg:flex">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              src={hub.src}
              alt="Angor Hub - Discover and connect with projects"
              className="rounded-xl main-border-gray object-cover w-full h-auto hover:scale-105 transition-transform duration-300"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
        </div>
      </motion.div>

 
    </section>
  );
};
