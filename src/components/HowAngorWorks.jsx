import { motion } from "framer-motion";

export const HowAngorWorks = () => {
  return (
    <section className="w-full bg-bgDark1 py-16 sm:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-12 lg:mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="block-subtitle"
            >
              HOW IT WORKS
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title"
            >
              Angor Flow
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-secondaryText text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Understand how Angor's decentralized crowdfunding protocol works from project creation to fund recovery.
            </motion.p>
          </div>

          {/* SVG Illustration */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-7xl"
            >
              <div className="relative">
                <img
                  src="/how-angor-works.svg"
                  alt="Angor workflow diagram showing the complete process from project creation to fund recovery"
                  className="w-full h-auto mx-auto"
                  style={{
                    maxHeight: "800px",
                    objectFit: "contain"
                  }}
                />
                
                {/* Optional overlay for better mobile experience */}
                <div className="absolute inset-0 bg-gradient-to-t from-bgDark1/10 to-transparent pointer-events-none opacity-0 sm:opacity-100" />
              </div>
              
              {/* Mobile optimization message */}
              <div className="block sm:hidden mt-4 text-center">
                <p className="text-secondaryText text-sm">
                  💡 Tip: Rotate your device or use desktop for better diagram viewing
                </p>
              </div>
            </motion.div>
          </div>

          {/* Optional Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12 lg:mt-16"
          >
            <motion.a
              href="/how-angor-works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-secondaryColor text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
            >
              Learn More About Angor
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};