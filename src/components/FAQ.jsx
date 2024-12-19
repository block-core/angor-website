import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "What is Angor?",
    answer:
      "Angor is fully decentralized, with no middleman involved in the investment process. It has no backend and uses the Bitcoin and Nostr protocols to achieve this.",
  },
  {
    question: "How does Angor work?",
    answer:
<<<<<<< HEAD
      "Angor leverages Bitcoin’s scripting language to program spending conditions like timelocks, hashlocks, and multisig. Each project milestone is represented as a UTXO, releasing funds over time using timelocks, while a 2-of-2 multisig allows investors to exit if needed, when an investor exists a project their Bitcoin becomes locked for the duration of a predefined penalty.",
=======
      "Angor leverages Bitcoin’s scripting language to program spending conditions like timelocks, hashlocks, and multisig. Each project milestone is represented as a UTXO, releasing funds over time using timelocks, while a 2-of-2 multisig allows investors to exit if needed.",
>>>>>>> 6a36a36 (first commit)
  },
  {
    question: "What role does Nostr play?",
    answer:
      "Nostr is used for storing project metadata and facilitating communication between founders and investors. Angor Hub allows you to create custom project views, search for projects, and get updates from founders.",
  },
  {
    question: "How does Angor benefit investors?",
    answer:
      "Investor funds are time-locked, preventing rug pulls, and offering more control over unspent funds, which reduces financial risk.",
  },
  {
    question: "What advantages does Angor offer to founders?",
    answer:
      "Founders benefit from a secure platform for investors, unlocking more capital. Investors are guaranteed that their funds are committed to the project, attracting serious backers.",
  },
  {
    question: "Is Angor suitable for all types of crowdfunding projects?",
    answer:
      "Angor’s decentralized and secure nature makes it suitable for a wide range of crowdfunding projects.",
  },
  {
    question: "What assets can I invest?",
    answer:
      "Angor only supports Bitcoin for investments.",
  },
  {
    question: "Do I need permission to use Angor?",
    answer:
      "Angor is permissionless and censorship-resistant, just like Bitcoin.",
  },
  {
    question: "How does Angor ensure the security of funds?",
    answer:
      "Angor uses Bitcoin’s time-lock contracts and a 2-of-2 multisig approach, ensuring the security of funds at each stage.",
  },
<<<<<<< HEAD
  {
    question: "How do I recover my unspent funds?",
    answer:
      "If you want to exit a project you backed, you can initiate a recovery of any unspent funds through your Angor wallet. This process allows you to exit the project securely.",
  },
  {
    question: "Are there any restrictions/charges for recovering unspent funds?",
    answer:
      "There are no charges, except for the miner fee. Angor’s protocol ensures you retain control over your contributions without additional platform fees.",
  },
  {
    question: "How long does it take to recover unspent funds?",
    answer:
      "Recovering unspent funds is quick and processed via your Angor wallet. Ensure the recovery transaction fee rate is high enough to get into the target block.",
  },
  {
    question: "What happens if the project is not fully funded?",
    answer:
      "If a project doesn’t reach full funding, there are two potential paths: if the founder consents, they can co-sign an exit transaction using the 2-of-2 multisig setup to return funds. If not, the investor may need to engage in a penalty process.",
  },
  {
    question: "When and how are rewards/tokens paid to investors?",
    answer:
      "Angor does not manage rewards such as shares or token allocation; this is handled directly between the founder and investor.",
  },
  {
    question: "How can I get updates on the projects' progress?",
    answer:
      "You can monitor project progress on Angor Hub, where updates will be posted using the Nostr relays. This provides real-time access to project statuses and milestones. Notifications can be enabled to alert you to significant developments.",
  },
  {
    question: "How do you select and vet crowdfunding projects?",
    answer:
      "Angor is a decentralized protocol, and developers do not participate in the selection or vetting of projects listed on the platform. The responsibility for choosing projects lies with the community and the protocol’s trustless design.",
  },
=======
>>>>>>> 6a36a36 (first commit)
];



export const FAQ = () => (
  <section className="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 block-subtitle text-center">Have any questions?</p>
          <h2 className="mb-16 block-big-title text-center">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1" key={`${item.question}-${index}`}>
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        <p
          className={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#cbdde1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
