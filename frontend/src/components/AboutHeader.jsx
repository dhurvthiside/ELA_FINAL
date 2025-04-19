<section className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
        {/* Founder Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-shrink-0"
        >
          <img
            src="../assets/p_img1.png" // Replace with the actual path to the founder's image
            alt="Founder"
            className="w-80 h-auto rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Founder Text */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl text-center md:text-left"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Note from Our Founder
          </h2>
          <h3 className="text-xl font-semibold mb-6 text-gray-600">
            [Founder's Name]
          </h3>
          <p className="text-gray-600 leading-relaxed">
            I’ve always believed that fashion is a way to express your inner world.
            For me, jewelry has always been about emotion—not the price tag, but
            the story it tells. Growing up in a joint family, I found joy in the
            little things: classic songs, traditional outfits, and the warmth of
            family traditions. These memories inspire every ELA design.
            <br /><br />
            I wanted to create jewelry that feels personal, that elevates your
            everyday look, and that connects you to something deeper—your heritage,
            your individuality, your story. At ELA, we’re not just designing jewelry.
            We’re creating memories, preserving traditions, and celebrating women.
          </p>
        </motion.div>

      </div>
    </section>


import React from "react";
import { motion } from "framer-motion";
import headerImage from "../assets/aboutus_header.png"; // Adjust path if needed

const AboutUsSection = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-20">
      {/* Header Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-white bg-opacity-90 text-gray-800 p-8 rounded-lg shadow-lg max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            WE ARE ELA
          </h1>
          <p className="text-base md:text-lg mb-4">
            At ELA, we believe that jewelry isn’t just something you wear—it’s a
            way of expressing who you are. It’s about heritage, artistry, and
            capturing those precious little moments that make life beautiful.
          </p>
          <p className="text-base md:text-lg mb-4">
            ELA stands for everything we value—<span className="font-bold">Ethnic Love Aesthetics</span>. 
            It’s a reflection of our love for traditions, a celebration of individuality, 
            and a tribute to the timeless beauty of handcrafted jewelry. Whether it’s a simple 
            pendant or an intricate bridal set, each piece at ELA carries a story—a story that 
            connects us to our roots, our culture, and each other. When you wear ELA, you’re not
            just wearing jewelry.
          </p>
          <p className="text-base md:text-lg">
            You’re wearing a piece of art!
          </p>
        </div>

        <div className="mt-10 md:mt-0 md:ml-10">
          <img
            src={headerImage}
            alt="We Are ELA"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
      </motion.div>

      {/* Our Purpose Section */}
      <motion.div
        className="bg-white/60 backdrop-blur-md p-8 rounded-2xl mt-16 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-[#4c3b2a] text-3xl font-semibold mb-5 font-quicksand">
          Our Purpose: Celebrating You
        </h2>
        <p className="text-[#4c3b2a] text-base leading-relaxed font-quicksand">
          At ELA, we’re here to celebrate you. We design jewelry that speaks to
          your soul, tells your story, and makes every day a little more special.
          From the intricate details of a pair of earrings to the bold elegance
          of a statement necklace, every piece is a reflection of the women who
          wear them—strong, beautiful, and unapologetically themselves.
        </p>
      </motion.div>

      <section className="w-full bg-white py-16 px-8">
  <motion.div
    className="max-w-7xl mx-auto"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="flex flex-col md:flex-row md:justify-between gap-8 items-start">
      {/* Left Content */}
      <div className="flex-1">
        <div className="flex items-center mb-6">
          <div className="w-2 h-10 bg-[#5b4835] mr-4 rounded-full"></div>
          <h2 className="text-[#4c3b2a] text-3xl font-semibold font-quicksand">
            Our Vision: A Piece of ELA in Every Story
          </h2>
        </div>
        <p className="text-[#4c3b2a] text-base leading-relaxed font-quicksand mb-4">
          At ELA, our dream is simple: to be a part of your journey. We want our jewelry to make your celebrations brighter, your milestones more memorable, and your everyday moments a little more special. Whether it’s a wedding, a festive gathering, or a casual brunch with friends, we want ELA to be the sparkle that completes your look.
        </p>
        <p className="text-[#4c3b2a] text-base leading-relaxed font-quicksand">
          But our vision goes beyond jewelry. We aim to:
        </p>
      </div>

      {/* Right Cards */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Card 1 */}
        <motion.div
          className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-[#4c3b2a] text-lg font-semibold mb-2 font-quicksand">
            Support Artisans:
          </h3>
          <p className="text-[#4c3b2a] text-sm font-quicksand">
            Create sustainable livelihoods for traditional craftspeople.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-[#5b4835]/80 backdrop-blur-md p-6 rounded-2xl shadow-md text-white"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-white text-lg font-semibold mb-2 font-quicksand">
            Celebrate Heritage:
          </h3>
          <p className="text-white text-sm font-quicksand">
            Keep the legacy of Indian artistry alive.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-[#4c3b2a] text-lg font-semibold mb-2 font-quicksand">
            Empower Women:
          </h3>
          <p className="text-[#4c3b2a] text-sm font-quicksand">
            Design pieces that inspire confidence, self-expression, and individuality.
          </p>
        </motion.div>
      </div>
    </div>
  </motion.div>
</section>
<section className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
        {/* Founder Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-shrink-0"
        >
          <img
            src="../assets/p_img1.png" // Replace with the actual path to the founder's image
            alt="Founder"
            className="w-80 h-auto rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Founder Text */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl text-center md:text-left"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Note from Our Founder
          </h2>
          <h3 className="text-xl font-semibold mb-6 text-gray-600">
            [Founder's Name]
          </h3>
          <p className="text-gray-600 leading-relaxed">
            I’ve always believed that fashion is a way to express your inner world.
            For me, jewelry has always been about emotion—not the price tag, but
            the story it tells. Growing up in a joint family, I found joy in the
            little things: classic songs, traditional outfits, and the warmth of
            family traditions. These memories inspire every ELA design.
            <br /><br />
            I wanted to create jewelry that feels personal, that elevates your
            everyday look, and that connects you to something deeper—your heritage,
            your individuality, your story. At ELA, we’re not just designing jewelry.
            We’re creating memories, preserving traditions, and celebrating women.
          </p>
        </motion.div>

      </div>
    </section>

    

    </div>
  );
};

export default AboutUsSection;

