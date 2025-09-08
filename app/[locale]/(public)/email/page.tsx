export default function EmailPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="self-start text-4xl font-semibold mb-8">Contact Me</h1>
      <h2 className="text-2xl font-semibold text-gray-900">Have a proposal?</h2>
      <p className="text-lg text-gray-600 mb-8">Leave me a message.</p>

      <form className="w-full max-w-3xl space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="text"
            placeholder="Company (optional)"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="tel"
            placeholder="Phone (optional)"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <textarea
          placeholder="Tell me about your project..."
          rows={6}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="border border-gray-900 text-gray-900 px-8 py-2 rounded-4xl hover:bg-gray-100 transition cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
