function CTA() {
  return (
    <section className='bg-black text-white py-20'>
      <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='md:col-span-2'>
          <h2 className='md:text-4xl sm:text-3xl font-bold'>Want to work with us?</h2>
          <p>Singn up for our newsletter and get the latest news</p>
        </div>
        <div>
          <input
            className='w-full px-4 py-2 rounded-md bg-gray-50'
            type='text'
            placeholder='Enter email'
          />
        </div>
      </div>
    </section>
  );
}

export default CTA;
