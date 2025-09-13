import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQCategories = [
	{
		title: "Getting Started",
		color: "secondaryColor",
		questions: [
			{
				question: "What is Angor?",
				answer:
					"Angor is fully decentralized, with no middleman involved in the investment process. It has no backend and uses the Bitcoin and Nostr protocols to achieve this.",
			},
			{
				question: "How does Angor work?",
				answer:
					"Angor leverages Bitcoin's scripting language to program spending conditions like timelocks, hashlocks, and multisig. Each project milestone is represented as a UTXO, releasing funds over time using timelocks, while a 2-of-2 multisig allows investors to exit if needed, when an investor exists a project their Bitcoin becomes locked for the duration of a predefined penalty.",
			},
			{
				question: "Do I need permission to use Angor?",
				answer:
					"Angor is permissionless and censorship-resistant, just like Bitcoin.",
			},
			{
				question: "What assets can I invest?",
				answer: "Angor only supports Bitcoin for investments.",
			},
		],
	},
	{
		title: "Technology & Security",
		color: "primaryColor",
		questions: [
			{
				question: "What role does Nostr play?",
				answer:
					"Nostr is used for storing project metadata and facilitating communication between founders and investors. Angor Hub allows you to create custom project views, search for projects, and get updates from founders.",
			},
			{
				question: "How does Angor ensure the security of funds?",
				answer:
					"Angor uses Bitcoin's time-lock contracts and a 2-of-2 multisig approach, ensuring the security of funds at each stage.",
			},
		],
	},
	{
		title: "For Investors",
		color: "cyan-600",
		questions: [
			{
				question: "How does Angor benefit investors?",
				answer:
					"Investor funds are time-locked, preventing rug pulls, and offering more control over unspent funds, which reduces financial risk.",
			},
			{
				question: "How do I recover my unspent funds?",
				answer:
					"If you want to exit a project you backed, you can initiate a recovery of any unspent funds through your Angor wallet. This process allows you to exit the project securely.",
			},
			{
				question: "Are there any restrictions/charges for recovering unspent funds?",
				answer:
					"There are no charges, except for the miner fee. Angor's protocol ensures you retain control over your contributions without additional platform fees.",
			},
			{
				question: "How long does it take to recover unspent funds?",
				answer:
					"Recovering unspent funds is quick and processed via your Angor wallet. Ensure the recovery transaction fee rate is high enough to get into the target block.",
			},
			{
				question: "What happens if the project is not fully funded?",
				answer:
					"If a project doesn't reach full funding, there are two potential paths: if the founder consents, they can co-sign an exit transaction using the 2-of-2 multisig setup to return funds. If not, the investor may need to engage in a penalty process.",
			},
			{
				question: "When and how are rewards/tokens paid to investors?",
				answer:
					"Angor does not manage rewards such as shares or token allocation; this is handled directly between the founder and investor.",
			},
		],
	},
	{
		title: "For Founders",
		color: "emerald-600",
		questions: [
			{
				question: "What advantages does Angor offer to founders?",
				answer:
					"Founders benefit from a secure platform for investors, unlocking more capital. Investors are guaranteed that their funds are committed to the project, attracting serious backers.",
			},
			{
				question: "Is Angor suitable for all types of crowdfunding projects?",
				answer:
					"Angor's decentralized and secure nature makes it suitable for a wide range of crowdfunding projects.",
			},
			{
				question: "How can I get updates on the projects' progress?",
				answer:
					"You can monitor project progress on Angor Hub, where updates will be posted using the Nostr relays. This provides real-time access to project statuses and milestones. Notifications can be enabled to alert you to significant developments.",
			},
		],
	},
	{
		title: "Platform & Governance",
		color: "bgDark3",
		questions: [
			{
				question: "How do you select and vet crowdfunding projects?",
				answer:
					"Angor is a decentralized protocol, and developers do not participate in the selection or vetting of projects listed on the platform. The responsibility for choosing projects lies with the community and the protocol's trustless design.",
			},
		],
	},
];

export const FAQ = () => {
	const [activeCategory, setActiveCategory] = useState(0);

	return (
		<section className="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-bgDark1 overflow-hidden">
			<div className="absolute -top-10" id="FAQ" />
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<div className="relative z-10 container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
					<div className="max-w-6xl mx-auto">
						{/* Header Section */}
						<div className="text-center mb-12 lg:mb-16">
							<motion.p 
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="mb-4 sm:mb-6 block-subtitle"
							>
								Have any questions?
							</motion.p>
							<motion.h2 
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.1 }}
								className="mb-6 sm:mb-8 block-big-title"
							>
								Frequently Asked Questions
							</motion.h2>
							<motion.p 
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="text-secondaryText text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
							>
								Find answers to common questions about Angor's decentralized
								crowdfunding platform
							</motion.p>
						</div>

						{/* Category Navigation - Mobile First Design */}
						<div className="mb-8 lg:mb-12">
							{/* Mobile Dropdown */}
							<div className="block lg:hidden mb-6">
								<select
									value={activeCategory}
									onChange={(e) => setActiveCategory(parseInt(e.target.value))}
									className="w-full px-4 py-3 bg-bgDark2 border border-mainBorder rounded-xl text-primaryText font-medium focus:outline-none focus:ring-2 focus:ring-secondaryColor focus:border-transparent"
								>
									{FAQCategories.map((category, index) => (
										<option key={category.title} value={index}>
											{category.title}
										</option>
									))}
								</select>
							</div>

							{/* Desktop Navigation */}
							<div className="hidden lg:grid grid-cols-1 xl:grid-cols-5 gap-3">
								{FAQCategories.map((category, index) => (
									<motion.button
										key={category.title}
										onClick={() => setActiveCategory(index)}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										className={`
											px-4 py-3 rounded-xl font-medium text-sm xl:text-base
											transition-all duration-300 text-center border
											${
												activeCategory === index
													? "bg-secondaryColor text-white shadow-lg border-transparent"
													: "bg-bgDark2 text-secondaryText hover:bg-bgDark3 hover:text-primaryText border-mainBorder hover:border-mainBorderLighter"
											}
										`}
									>
										{category.title}
									</motion.button>
								))}
							</div>
						</div>

						{/* FAQ Content */}
						<AnimatePresence mode="wait">
							<motion.div
								key={activeCategory}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.3, ease: "easeInOut" }}
								className="mb-8 lg:mb-12"
							>
								{/* Category Header */}
								<div className="mb-6 lg:mb-8">
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.3, delay: 0.1 }}
										className="mb-4"
									>
										<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primaryText">
											{FAQCategories[activeCategory].title}
										</h3>
									</motion.div>
									<motion.div
										initial={{ width: 0 }}
										animate={{ width: "4rem" }}
										transition={{ duration: 0.4, delay: 0.2 }}
										className="h-1 bg-secondaryColor rounded-full"
									/>
								</div>

								{/* Questions Grid */}
								<div className="space-y-3 sm:space-y-4">
									{FAQCategories[activeCategory].questions.map((item, index) => (
										<motion.div
											key={`${item.question}-${index}`}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.3, delay: index * 0.1 }}
										>
											<FAQBox
												title={item.question}
												content={item.answer}
												defaultOpen={index === 0}
												categoryColor={FAQCategories[activeCategory].color}
												index={index}
											/>
										</motion.div>
									))}
								</div>
							</motion.div>
						</AnimatePresence>

						{/* Contact Section */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="text-center"
						>
							<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primaryText mb-6">
								Still have questions?
							</h3>
							<motion.a
								href="https://docs.angor.io"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="inline-block px-8 py-3 bg-secondaryColor text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
							>
								Read Documentation
							</motion.a>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

const FAQBox = ({ defaultOpen, title, content, categoryColor, index }) => {
	const [isOpen, setIsOpen] = useState(defaultOpen);

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, delay: index * 0.05 }}
		>
			<div
				className={`
					p-4 sm:p-5 lg:p-6 rounded-xl bg-bgDark2 border border-mainBorderDarker
					cursor-pointer transition-all duration-300 hover:bg-bgDark3 
					hover:border-mainBorder hover:shadow-lg
					${isOpen ? "ring-2 ring-secondaryColor/30 bg-bgDark3 shadow-lg border-mainBorder" : ""}
				`}
				onClick={() => setIsOpen(!isOpen)}
			>
				{/* Question Header */}
				<div className="flex justify-between items-center gap-4">
					<div className="flex-1 min-w-0">
						<h4 className="text-base sm:text-lg font-semibold text-primaryText group-hover:text-primaryText/90 transition-colors duration-300 leading-relaxed">
							{title}
						</h4>
					</div>

					{/* Expand/Collapse Button */}
					<div className="flex-shrink-0">
						<motion.div
							animate={{ rotate: isOpen ? 180 : 0 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondaryColor flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
						>
							<svg
								width="14"
								height="14"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="text-white"
							>
								<path
									d="M4.16732 7.5L10.0007 13.3333L15.834 7.5"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</motion.div>
					</div>
				</div>

				{/* Answer Content */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className="overflow-hidden"
						>
							<motion.div
								initial={{ y: -10 }}
								animate={{ y: 0 }}
								exit={{ y: -10 }}
								transition={{ duration: 0.3, ease: "easeInOut" }}
								className="pt-4"
							>
								{/* Answer Text */}
								<div className="text-secondaryText text-sm sm:text-base leading-relaxed">
									{content}
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	);
};