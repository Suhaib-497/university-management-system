import React, { useRef, useEffect } from 'react';

const InfiniteScrollManual = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    // Clone the content to simulate infinite scroll
    const clonedContent = scrollContainer.innerHTML;
    scrollContainer.innerHTML += clonedContent;

    const handleScroll = () => {
      if (scrollContainer.scrollTop >= scrollContainer.scrollHeight / 2) {
        // Reset scroll position to create the loop effect
        scrollContainer.scrollTop = 0;
      }
      if (scrollContainer.scrollTop === 0) {
        // When user scrolls back to the top from the end, continue from the middle
        scrollContainer.scrollTop = scrollContainer.scrollHeight / 2 - scrollContainer.clientHeight;
      }
    };

    // Add the scroll event listener
    scrollContainer.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      style={{
        height: '200px',
        width: '300px',
        overflowY: 'scroll',
        border: '1px solid #ccc',
      }}
    >
      <div >
        {/* Your scrollable content */}
        <p>Scroll content...</p>
        <p>More content...</p>
        <p>Even more content...</p>

        <p>Scroll content...</p>
        <p>More content...</p>
        <p>Even more content...</p>


        <p>Scroll content...</p>
        <p>More content...</p>
        <p>Even more content...</p>

        <p>Scroll content...</p>
        <p>More content...</p>
        <p>Even more content...</p>
      </div>
    </div>
  );
};

export default InfiniteScrollManual;
