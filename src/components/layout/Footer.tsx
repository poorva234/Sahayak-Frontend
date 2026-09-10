import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E4DFFA] mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#6D3FC8] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-[#1A1826]">Sahayak</span>
            </div>
            <p className="text-sm text-[#71697E] leading-relaxed max-w-xs">
              An intelligent citizen welfare platform helping you discover, understand, and apply for public welfare schemes.
            </p>
            <p className="text-xs text-[#71697E] mt-4 leading-relaxed">
              <span className="font-medium text-[#1A1826]">Demo Project:</span> This is a research and engineering demonstration. Not affiliated with any government agency.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#1A1826] mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm text-[#71697E]">
              <li><a href="#how-it-works" className="hover:text-[#6D3FC8] transition-colors">How It Works</a></li>
              <li><a href="#schemes" className="hover:text-[#6D3FC8] transition-colors">Explore Schemes</a></li>
              <li><a href="#" className="hover:text-[#6D3FC8] transition-colors">Eligibility Check</a></li>
              <li><a href="#" className="hover:text-[#6D3FC8] transition-colors">AI Assistant</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#1A1826] mb-4">Information</h4>
            <ul className="space-y-2.5 text-sm text-[#71697E]">
              <li><a href="#" className="hover:text-[#6D3FC8] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#6D3FC8] transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-[#6D3FC8] transition-colors">Accessibility</a></li>
              <li><a href="#" className="hover:text-[#6D3FC8] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E4DFFA] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#71697E]">
          <p>© 2025 Sahayak · Final Year Engineering Project · Demo Only</p>
          <p>Final eligibility is always determined by the relevant government authority.</p>
        </div>
      </div>
    </footer>
  );
}
