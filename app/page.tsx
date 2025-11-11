"use client"

import { ChevronRight, Check, Phone, MessageSquare, Delete } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [input, setInput] = useState("")
  const [isLetters, setIsLetters] = useState(false)
  const [letterIndices, setLetterIndices] = useState({})

  const letterMap = {
    "2": "ABC",
    "3": "DEF",
    "4": "GHI",
    "5": "JKL",
    "6": "MNO",
    "7": "PQRS",
    "8": "TUV",
    "9": "WXYZ",
  }

  const handleKeyPress = (value: string) => {
    if (isLetters && letterMap[value]) {
      const letters = letterMap[value]
      const currentIndex = letterIndices[value] || 0
      const nextIndex = (currentIndex + 1) % letters.length
      setLetterIndices({ ...letterIndices, [value]: nextIndex })
      setInput(input + letters[nextIndex])
    } else {
      setInput(input + value)
    }
  }

  const handleDelete = () => {
    setInput(input.slice(0, -1))
  }

  const handleCall = () => {
    console.log("Calling:", input)
  }

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <div className="relative px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-emerald-400 mb-6 leading-tight">
              Yadaphone for
              <br />
              Business
            </h1>
            <p className="text-lg text-gray-400 mb-8">Cheap calls to 180+ countries for your team</p>

            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-full mb-10 inline-block">
              See rates <ChevronRight className="inline w-5 h-5 ml-2" />
            </button>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">One balance for all your calls</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Unlimited members for no extra cost</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Import and manage contacts like in a CRM</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Priority support</span>
              </div>
            </div>
          </div>

          {/* Right - Phone UI */}
          <div className="relative h-96 md:h-full">
            <div className="bg-gray-900 rounded-3xl shadow-2xl p-6 max-w-sm mx-auto h-full flex flex-col border border-gray-800">
              {/* Phone Header */}
              <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">+1</span>
                  <input
                    type="text"
                    placeholder="Phone number"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="outline-none text-gray-300 flex-1 bg-transparent cursor-pointer hover:bg-gray-800 rounded px-2"
                  />
                </div>
                <button className="text-emerald-400 text-sm font-semibold">
                  <MessageSquare className="w-5 h-5" />
                </button>
              </div>

              {/* Balance and Record Button */}
              <div className="flex justify-between items-center mb-6 gap-3">
                <div className="bg-emerald-950 rounded-full px-3 py-1.5 inline-block border border-emerald-700">
                  <span className="text-xs text-emerald-300 font-semibold">Balance: $200</span>
                </div>
                <button className="border-2 border-emerald-500 text-emerald-400 font-semibold py-1.5 px-4 rounded-full text-xs hover:bg-emerald-950 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                    <circle cx="12" cy="7" r="2" fill="currentColor" opacity="0.7" />
                    <circle cx="12" cy="17" r="2" fill="currentColor" opacity="0.7" />
                  </svg>
                  Record
                </button>
              </div>

              {/* Keypad - 3x4 grid */}
              <div className="flex-1 flex flex-col gap-3 mb-4">
                {/* Main keypad grid - 3 columns with proper square buttons */}
                <div className="grid grid-cols-3 gap-3 flex-1">
                  {isLetters
                    ? // Letter mode - show only 2-9 with cycling letters
                      [
                        { num: "2", letters: "ABC" },
                        { num: "3", letters: "DEF" },
                        { num: "4", letters: "GHI" },
                        { num: "5", letters: "JKL" },
                        { num: "6", letters: "MNO" },
                        { num: "7", letters: "PQRS" },
                        { num: "8", letters: "TUV" },
                        { num: "9", letters: "WXYZ" },
                      ].map((key, i) => (
                        <button
                          key={i}
                          onClick={() => handleKeyPress(key.num)}
                          className="font-semibold flex flex-col items-center justify-center bg-gray-700 text-gray-200 hover:bg-gray-600 transition rounded py-4 px-3 aspect-square"
                        >
                          <span className="text-lg leading-none">{key.letters}</span>
                        </button>
                      ))
                    : // Number mode - show all 0-9, *, #
                      [
                        { num: "1", letters: "" },
                        { num: "2", letters: "ABC" },
                        { num: "3", letters: "DEF" },
                        { num: "4", letters: "GHI" },
                        { num: "5", letters: "JKL" },
                        { num: "6", letters: "MNO" },
                        { num: "7", letters: "PQRS" },
                        { num: "8", letters: "TUV" },
                        { num: "9", letters: "WXYZ" },
                        { num: "*", letters: "" },
                        { num: "0", letters: "" },
                        { num: "#", letters: "" },
                      ].map((key, i) => (
                        <button
                          key={i}
                          onClick={() => handleKeyPress(key.num)}
                          className="font-semibold flex flex-col items-center justify-center bg-gray-700 text-gray-200 hover:bg-gray-600 transition rounded py-4 px-3 aspect-square"
                        >
                          <span className="text-2xl leading-none font-bold">{key.num}</span>
                          {key.letters && (
                            <span className="text-xs text-gray-500 leading-none mt-1">{key.letters}</span>
                          )}
                        </button>
                      ))}
                </div>

                {/* Control buttons row - smaller buttons */}
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => {
                      setIsLetters(!isLetters)
                      setLetterIndices({})
                    }}
                    className="font-semibold flex items-center justify-center bg-gray-700 text-gray-300 hover:bg-gray-600 transition border border-gray-600 rounded py-3 px-4 text-sm h-12"
                    title="Toggle keypad mode"
                  >
                    {isLetters ? "123" : "ABC"}
                  </button>

                  <button
                    onClick={handleCall}
                    className="font-semibold flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white transition rounded py-3 px-4 h-12"
                    title="Call"
                  >
                    <Phone className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleDelete}
                    className="font-semibold flex items-center justify-center bg-red-950 text-red-400 hover:bg-red-900 transition border border-red-700 rounded py-3 px-4 text-sm h-12"
                    title="Delete"
                  >
                    <Delete className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-gray-900 border-t border-b border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-6 flex gap-4 md:gap-8 overflow-x-auto text-sm">
          {["RELOCATION SERVICES", "BACKGROUND VERIFICATION", "MARKETPLACE BUSINESSES", "INTERNATIONAL LAW FIRMS"].map(
            (tab) => (
              <div
                key={tab}
                className="whitespace-nowrap text-gray-400 font-semibold text-xs md:text-sm hover:text-emerald-400 transition cursor-pointer"
              >
                {tab}
              </div>
            ),
          )}
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-emerald-600 rounded-xl p-6 text-white font-bold text-lg text-center">
            Free unlimited
            <br />
            members
          </div>
          <div className="bg-gray-900 border-2 border-emerald-500 rounded-xl p-6 text-emerald-400 font-bold text-lg text-center">
            Call
            <br />
            recordings
            <br />
            and transcripts
          </div>
          <div className="bg-emerald-950 rounded-xl p-6 text-emerald-300 font-bold text-lg text-center border border-emerald-700">
            Team
            <br />
            analytics
          </div>
          <div className="bg-emerald-600 rounded-xl p-6 text-white font-bold text-lg text-center">
            Priority
            <br />
            support
          </div>
        </div>
      </div>

      {/* Clear Rates Section */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Clear Rates for Teams</h2>

          <div className="space-y-6">
            {[
              { country: "🇺🇸 United States", standard: "$0.25/min", yadaphone: "$0.02/min", savings: "92%" },
              { country: "🇸🇬 Singapore", standard: "$0.35/min", yadaphone: "$0.08/min", savings: "94%" },
              { country: "🇮🇳 India", standard: "$0.35/min", yadaphone: "$0.08/min", savings: "94%" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center pb-4 border-b border-gray-800">
                <div className="text-gray-300 font-medium">{row.country}</div>
                <div className="text-gray-500">{row.standard}</div>
                <div className="text-emerald-400 font-semibold">{row.yadaphone}</div>
                <div className="text-emerald-400 font-semibold flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" /> {row.savings}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enterprise Credit Package */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-800 border-2 border-emerald-600 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-white">Select Your Enterprise Credit Package</h3>
            </div>

            <p className="text-gray-400 mb-8">
              Enterprise credits provide your organization with discounted rates for international calling.{" "}
              <a href="#" className="text-emerald-400 font-semibold">
                View enterprise rate calculator <ChevronRight className="inline w-4 h-4" />
              </a>
            </p>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-gray-300 block mb-4">Select Credit Package (USD)*</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { amount: "$100", popular: false },
                    { amount: "$300", popular: true },
                    { amount: "$500", popular: false, bonus: "5% bonus" },
                    { amount: "$1000", popular: false, bonus: "10% bonus" },
                  ].map((pkg, i) => (
                    <button
                      key={i}
                      className={`py-3 px-4 rounded-lg font-semibold relative transition ${
                        pkg.popular
                          ? "bg-emerald-600 text-white border-2 border-emerald-500"
                          : "bg-gray-700 border-2 border-gray-600 text-gray-200 hover:border-emerald-500"
                      }`}
                    >
                      {pkg.bonus && (
                        <span className="absolute -top-3 right-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded">
                          {pkg.bonus}
                        </span>
                      )}
                      {pkg.amount}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-4">Or enter custom amount (minimum $100)</p>
                <div className="flex items-center gap-2 bg-gray-700 border-2 border-gray-600 rounded-lg px-4 py-3 max-w-xs">
                  <span className="text-gray-500">$</span>
                  <input
                    type="text"
                    placeholder="300"
                    className="outline-none flex-1 text-gray-200 bg-transparent"
                    defaultValue="300"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-700 p-4 rounded-lg">
                <input type="checkbox" id="auto-topup" className="w-4 h-4 rounded" />
                <label htmlFor="auto-topup" className="text-sm text-gray-300">
                  <span className="font-semibold">Enable Auto Top-up</span>
                  <span className="text-emerald-400 font-semibold ml-2">Avoid interrupting important calls</span>
                </label>
              </div>

              <div className="space-y-3">
                <div className="bg-gray-700 text-gray-300 p-3 rounded text-sm">
                  Estimated monthly spend: $150 – $300
                </div>
                <div className="bg-gray-700 text-gray-300 p-3 rounded text-sm">
                  Your Yadaphone line will be configured for international calling line
                </div>
                <div className="bg-gray-700 text-gray-300 p-3 rounded text-sm">
                  In-call optimization: You can optimize your call costs
                </div>
              </div>

              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-lg transition">
                Secure checkout <ChevronRight className="inline w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Tools That Fit Your Workflow</h2>
          <p className="text-center text-gray-400 mb-12">Free unlimited members</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Free unlimited members", image: "/dashboard-interface.jpg" },
              { title: "One wallet for all users", image: "/wallet-interface.jpg" },
              { title: "Call history and recordings", image: "/call-history-interface.jpg" },
            ].map((tool, i) => (
              <div key={i} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                <img src={tool.image || "/placeholder.svg"} alt={tool.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <p className="font-semibold text-gray-300">{tool.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#"
              className="text-emerald-400 font-semibold inline-flex items-center gap-2 hover:text-emerald-300 transition"
            >
              See more <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Team Plans Section */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">See Our Team Plans In Action</h2>

          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
            <img src="/team-plans-demo.jpg" alt="Team plans demo" className="w-full h-96 object-cover" />
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Trust What Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Instant Enterprise", desc: "Set up and deploy in minutes, not weeks. Launch with confidence." },
              { title: "Pay for Scale", desc: "Only pay for what you use with transparent, competitive pricing." },
              { title: "Customer-First", desc: "Our support team is here to help you succeed every step of the way." },
            ].map((trust, i) => (
              <div key={i} className="text-center">
                <h3 className="text-lg font-bold text-white mb-3">{trust.title}</h3>
                <p className="text-gray-400">{trust.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-800 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "How many enterprise pricing tiers are there?",
                a: "We offer flexible pricing tiers designed to scale with your business.",
              },
              {
                q: "Can we get a custom number?",
                a: "Yes, custom numbers are available. Contact our sales team for details.",
              },
              {
                q: "Can you offer better number for teams?",
                a: "Absolutely. We provide discounted rates for teams and enterprises.",
              },
              {
                q: "How do I view my organization call history?",
                a: "Access your call history from your Yadaphone dashboard.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-700 rounded-lg p-6">
                <h3 className="font-bold text-white mb-2">{item.q}</h3>
                <p className="text-gray-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
