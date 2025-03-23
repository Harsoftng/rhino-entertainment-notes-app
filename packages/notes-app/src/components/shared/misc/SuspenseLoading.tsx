import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BarLoader } from "react-spinners";

const SuspenseLoading = (): React.ReactElement => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 300);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <React.Fragment>
      <AnimatePresence>
        {show && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center flex-column vh-80 vw-100 justify-center text-center py-3">
              <div className="flex items-center flex-column px-4">
                <BarLoader color={"#3c44b1"} loading={true} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

export default SuspenseLoading;
