import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div
      className="fixed bottom-0 w-full p-4 border-t bg-slate-100"
      data-testid="footer_wrapper"
    >
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <img src="/Trello-logo.png" className="h-20 w-40" />
        <div className="space-y-4 md:block md:w-auto flex flex-col items-center justify-between w-full bg-gray-100  text-sm">
          <div className="space-x-4 flex items-center justify-center w-full">
            <Button
              size="sm"
              variant="ghost"
              data-testid="footer_policy_button"
            >
              Privacy Policy
            </Button>
            <Button size="sm" variant="ghost" data-testid="footer_terms_button">
              Terms of Service
            </Button>
            <Button size="sm" variant="ghost" data-testid="footer_about_button">
              About Us
            </Button>
            <Button
              size="sm"
              variant="ghost"
              data-testid="footer_contact_button"
            >
              Contact Us
            </Button>
          </div>
          <div className="text-center text-gray-500 mt-4">
            <p>© 2024 Your Company. All rights reserved.</p>
            <p>Made with ❤️</p>
          </div>
        </div>
      </div>
    </div>
  );
};
