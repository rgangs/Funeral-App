import React from "react";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

export default function PrintableDocumentation() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Print Button - Hidden when printing */}
      <div className="print:hidden fixed top-6 right-6 z-50">
        <Button
          onClick={handlePrint}
          className="bg-gradient-to-r from-[#d4a5a5] to-[#c19a9a] hover:from-[#c19a9a] hover:to-[#d4a5a5] text-[#0a0a0a] shadow-lg"
        >
          <Printer className="w-4 h-4 mr-2" />
          Print / Save as PDF
        </Button>
      </div>

      {/* Document Content */}
      <div className="max-w-5xl mx-auto p-12 text-gray-900">
        {/* Cover Page */}
        <div className="text-center mb-16 page-break-after">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#d4a5a5] to-[#c19a9a] rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <h1 className="text-5xl font-light mb-4">In Remembrance</h1>
            <p className="text-2xl text-gray-600 font-light">Funeral Planning Application</p>
            <p className="text-lg text-gray-500 font-light mt-4">Complete Documentation & User Guide</p>
          </div>
          <div className="mt-16 text-gray-500">
            <p>Version 1.0</p>
            <p>{new Date().getFullYear()}</p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-16 page-break-after">
          <h2 className="text-3xl font-light mb-6 pb-3 border-b-2 border-gray-200">Table of Contents</h2>
          <div className="space-y-2 text-lg">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span>1. Overview</span>
              <span className="text-gray-400">3</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span>2. Design Philosophy</span>
              <span className="text-gray-400">4</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span>3. Application Structure</span>
              <span className="text-gray-400">5</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span>4. Pages & Features</span>
              <span className="text-gray-400">6</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span>5. Components</span>
              <span className="text-gray-400">15</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span>6. Layout</span>
              <span className="text-gray-400">16</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span>7. Database Entities</span>
              <span className="text-gray-400">17</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span>8. Key Features</span>
              <span className="text-gray-400">22</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span>9. Technical Stack</span>
              <span className="text-gray-400">24</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span>10. User Flow</span>
              <span className="text-gray-400">25</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span>11. Integration Points</span>
              <span className="text-gray-400">27</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span>12. Security & Access Control</span>
              <span className="text-gray-400">28</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span>13. Responsive Design</span>
              <span className="text-gray-400">29</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span>14. Future Enhancements</span>
              <span className="text-gray-400">30</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span>15. Getting Started</span>
              <span className="text-gray-400">32</span>
            </div>
          </div>
        </div>

        {/* 1. Overview */}
        <section className="mb-12 page-break-before">
          <h2 className="text-3xl font-light mb-6 pb-3 border-b-2 border-gray-200">1. Overview</h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              <strong className="text-[#d4a5a5]">In Remembrance</strong> is a compassionate, full-featured funeral planning application designed to help families coordinate and organize memorial services during difficult times.
            </p>
            <p>
              The application provides a calm, elegant interface with a dark theme featuring soft rose accents, creating a respectful and soothing user experience. Built on the base44 platform, it offers a complete suite of tools for managing every aspect of funeral planning, from initial setup to long-term memorial activities.
            </p>
            <p>
              The app recognizes that planning a funeral can be overwhelming, especially during grief. It's designed to help families "take it slow" by breaking down the process into manageable sections, providing checklists, collaboration tools, and support resources.
            </p>
          </div>
        </section>

        {/* 2. Design Philosophy */}
        <section className="mb-12 page-break-before">
          <h2 className="text-3xl font-light mb-6 pb-3 border-b-2 border-gray-200">2. Design Philosophy</h2>
          
          <h3 className="text-2xl font-light mb-4 mt-6">Color Palette</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="space-y-2">
              <li><strong>Background:</strong> Deep charcoal and black (#0a0a0a, #1a1a1a, #0f0f0f)</li>
              <li><strong>Accents:</strong> Soft rose and blush (#d4a5a5, #e8c4c4, #c19a9a)</li>
              <li><strong>Text:</strong> Off-white and cream (#f5f5f5, #e5e5e5, #c5c5c5)</li>
              <li><strong>Secondary:</strong> Muted grays (#2a2a2a, #a3a3a3)</li>
            </ul>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-6">Typography</h3>
          <p className="mb-6 leading-relaxed">
            Light, airy fonts with generous spacing ensure easy readability during a difficult time. Font weights are kept light (300-400) to maintain the calm aesthetic. Heading hierarchy is clear but subtle.
          </p>

          <h3 className="text-2xl font-light mb-4 mt-6">User Experience Principles</h3>
          <ul className="space-y-3 list-disc list-inside">
            <li><strong>Gentle animations:</strong> Smooth, slow transitions (300-800ms) that don't startle</li>
            <li><strong>Breathing layouts:</strong> Generous padding and spacing throughout</li>
            <li><strong>Rounded corners:</strong> Soft edges (8-16px radius) for approachability</li>
            <li><strong>Backdrop blur:</strong> Layered depth with subtle translucency</li>
            <li><strong>Gradients:</strong> Soft color transitions for visual interest</li>
          </ul>

          <h3 className="text-2xl font-light mb-4 mt-8">Accessibility</h3>
          <ul className="space-y-3 list-disc list-inside">
            <li>High contrast text (#f5f5f5 on #1a1a1a) exceeds WCAG AA standards</li>
            <li>Touch-friendly button sizes (minimum 44x44px)</li>
            <li>Clear focus indicators for keyboard navigation</li>
            <li>Responsive design works on all screen sizes</li>
            <li>Semantic HTML for screen reader compatibility</li>
          </ul>
        </section>

        {/* 3. Application Structure */}
        <section className="mb-12 page-break-before">
          <h2 className="text-3xl font-light mb-6 pb-3 border-b-2 border-gray-200">3. Application Structure</h2>
          
          <p className="mb-6 leading-relaxed">
            The application is organized into a modular architecture with clear separation of concerns:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <pre className="text-sm overflow-x-auto">
{`In Remembrance/
├── entities/
│   ├── FuneralDetails.json
│   ├── Guest.json
│   ├── ChecklistItem.json
│   ├── Expense.json
│   ├── Photo.json
│   ├── Message.json
│   └── Invitation.json
├── pages/
│   ├── Welcome.js
│   ├── FuneralSetup.js
│   ├── Dashboard.js
│   ├── Invitations.js
│   ├── GuestList.js
│   ├── Funeral.js
│   ├── Wake.js
│   ├── Memorial.js
│   ├── InnerChat.js
│   ├── PhotoGallery.js
│   ├── Budget.js
│   └── Documentation.js
├── components/
│   └── checklist/
│       └── ChecklistManager.jsx
└── Layout.js`}
            </pre>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-6">Architecture Layers</h3>
          <ul className="space-y-3 list-disc list-inside">
            <li><strong>Entities Layer:</strong> JSON schema definitions for data structures</li>
            <li><strong>Pages Layer:</strong> Full-page React components with routing</li>
            <li><strong>Components Layer:</strong> Reusable UI components</li>
            <li><strong>Layout Layer:</strong> Global navigation and shell</li>
          </ul>
        </section>

        {/* 4. Pages & Features */}
        <section className="mb-12 page-break-before">
          <h2 className="text-3xl font-light mb-6 pb-3 border-b-2 border-gray-200">4. Pages & Features</h2>

          <h3 className="text-2xl font-light mb-4 mt-6">4.1 Welcome Page</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>File:</strong> pages/Welcome.js</p>
            <p className="mb-4"><strong>Purpose:</strong> First introduction to the application for new users</p>
            <p className="mb-4"><strong>Features:</strong></p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Welcoming message with heart icon</li>
              <li>Overview of how the app can help</li>
              <li>Five key benefits highlighted with bullet points</li>
              <li>Call-to-action button to begin funeral setup</li>
              <li>Animated entrance with Framer Motion</li>
            </ul>
            <p className="mt-4"><strong>Navigation:</strong> "Begin the journey" button → Funeral Setup page</p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8">4.2 Funeral Setup Page</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>File:</strong> pages/FuneralSetup.js</p>
            <p className="mb-4"><strong>Purpose:</strong> Initial data collection about the deceased and funeral details</p>
            <p className="mb-4"><strong>Form Fields:</strong></p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Deceased name (required)</li>
              <li>Your relationship to the deceased</li>
              <li>Date of birth</li>
              <li>Date of passing</li>
              <li>Photo upload (with preview)</li>
              <li>Service type selection (Catholic, Humanist, Other)</li>
              <li>Service date & time (datetime picker)</li>
              <li>Service location</li>
              <li>Memorial message / obituary (large text area)</li>
            </ul>
            <p className="mt-4"><strong>Creates Entity:</strong> FuneralDetails</p>
            <p className="mt-2"><strong>Validation:</strong> Only deceased name is required for flexibility</p>
            <p className="mt-2"><strong>Navigation:</strong> After submission → Dashboard</p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8 page-break-before">4.3 Dashboard Page</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>File:</strong> pages/Dashboard.js</p>
            <p className="mb-4"><strong>Purpose:</strong> Central navigation hub with quick access to all features</p>
            <p className="mb-4"><strong>Layout:</strong> Responsive grid (1/2/4 columns)</p>
            <p className="mb-4"><strong>Sections (8 cards):</strong></p>
            <div className="ml-4 space-y-3">
              <div>
                <strong>1. Invitations</strong> - Create and send memorial invitations
              </div>
              <div>
                <strong>2. Guest List</strong> - Manage attendees and inner circle
              </div>
              <div>
                <strong>3. Funeral</strong> - Plan the funeral service
              </div>
              <div>
                <strong>4. The Wake</strong> - Organize the wake gathering
              </div>
              <div>
                <strong>5. Memorial</strong> - Honor their memory
              </div>
              <div>
                <strong>6. Inner Chat</strong> - Coordinate with your team
              </div>
              <div>
                <strong>7. Photo Gallery</strong> - Share cherished memories
              </div>
              <div>
                <strong>8. Budget</strong> - Track and split expenses
              </div>
            </div>
            <p className="mt-4"><strong>Visual Design:</strong> Each card has unique gradient, icon, hover effects</p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8">4.4 Invitations Page</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>File:</strong> pages/Invitations.js</p>
            <p className="mb-4"><strong>Purpose:</strong> Design and customize memorial e-invitations</p>
            <p className="mb-4"><strong>Features:</strong></p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Three template options: Classic, Modern, Floral</li>
              <li>Visual template selection with preview thumbnails</li>
              <li>Custom message text area</li>
              <li>Live preview panel showing invitation as guests will see it</li>
              <li>Auto-populates with funeral details (name, dates, location)</li>
              <li>Download button for sharing</li>
            </ul>
            <p className="mt-4"><strong>Creates/Updates Entity:</strong> Invitation</p>
            <p className="mt-2"><strong>Layout:</strong> Split view - customization (left) and preview (right)</p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8 page-break-before">4.5 Guest List Page</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>File:</strong> pages/GuestList.js</p>
            <p className="mb-4"><strong>Purpose:</strong> Manage attendees and select coordination team</p>
            <p className="mb-4"><strong>Features:</strong></p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Add guests with name, email, phone</li>
              <li>Checkbox to mark guest as "Inner Circle" member</li>
              <li>Two-column layout separating inner circle from regular guests</li>
              <li>Quick toggle between lists</li>
              <li>Visual badges and icons for inner circle members</li>
              <li>Collapsible add form</li>
            </ul>
            <p className="mt-4"><strong>Creates Entity:</strong> Guest</p>
            <p className="mt-2"><strong>Special Field:</strong> is_inner_circle (boolean)</p>
            <p className="mt-2"><strong>Inner Circle Benefits:</strong> Access to chat, expense tracking participation</p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8">4.6 Funeral Planning Page</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>File:</strong> pages/Funeral.js</p>
            <p className="mb-4"><strong>Purpose:</strong> Comprehensive funeral planning checklist</p>
            <p className="mb-4"><strong>Default Tasks Include:</strong></p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Choose burial or cremation</li>
              <li>Select cemetery plot or columbarium</li>
              <li>Schedule the burial or cremation</li>
              <li>Obtain necessary permits</li>
              <li>Choose date, time, and venue</li>
              <li>Select officiant (priest, celebrant, family member)</li>
              <li>Choose speakers or readers</li>
              <li>Select music and readings or prayers</li>
              <li>Prepare visuals (photos, slideshow, video tribute)</li>
              <li>Arrange livestream setup if needed</li>
              <li>Prepare order of service or printed program</li>
              <li>Arrange flowers, candles, and decorations</li>
              <li>Organize reception or gathering afterward</li>
            </ul>
            <p className="mt-4"><strong>Component:</strong> ChecklistManager</p>
            <p className="mt-2"><strong>Creates Entity:</strong> ChecklistItem (category: "funeral")</p>
            <p className="mt-2"><strong>Features:</strong> Add custom tasks, mark complete, progress tracking</p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8 page-break-before">4.7 Wake Planning Page</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>File:</strong> pages/Wake.js</p>
            <p className="mb-4"><strong>Purpose:</strong> Organize wake/gathering checklist</p>
            <p className="mb-4"><strong>Default Tasks Include:</strong></p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Choose venue for the wake</li>
              <li>Arrange food and beverages</li>
              <li>Plan seating arrangements</li>
              <li>Prepare memory table or display</li>
              <li>Organize guest book or memory cards</li>
              <li>Arrange background music</li>
              <li>Plan activities or memory sharing</li>
            </ul>
            <p className="mt-4"><strong>Component:</strong> ChecklistManager</p>
            <p className="mt-2"><strong>Creates Entity:</strong> ChecklistItem (category: "wake")</p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8">4.8 Memorial Planning Page</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>File:</strong> pages/Memorial.js</p>
            <p className="mb-4"><strong>Purpose:</strong> Long-term remembrance and grief support planning</p>
            <p className="mb-4"><strong>Default Tasks Include:</strong></p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Consider grief support counseling</li>
              <li>Set up ongoing support groups</li>
              <li>Organize tribute activities</li>
              <li>Plan memorial events or gatherings</li>
              <li>Create online memorial page</li>
              <li>Arrange flowers for memorial site</li>
              <li>Plan for future remembrance dates</li>
            </ul>
            <p className="mt-4"><strong>Component:</strong> ChecklistManager</p>
            <p className="mt-2"><strong>Creates Entity:</strong> ChecklistItem (category: "memorial")</p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8 page-break-before">4.9 Inner Chat Page</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>File:</strong> pages/InnerChat.js</p>
            <p className="mb-4"><strong>Purpose:</strong> Private group messaging for coordination team</p>
            <p className="mb-4"><strong>Features:</strong></p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Real-time messaging interface</li>
              <li>Auto-refresh every 3 seconds</li>
              <li>Message bubbles styled by sender (current user on right, others on left)</li>
              <li>Sender name and timestamp on each message</li>
              <li>Auto-scroll to latest message</li>
              <li>Simple text input with send button</li>
            </ul>
            <p className="mt-4"><strong>Creates Entity:</strong> Message</p>
            <p className="mt-2"><strong>Access Control:</strong> Only inner circle members can participate</p>
            <p className="mt-2"><strong>Design:</strong> Chat-style interface with gradient message bubbles</p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8">4.10 Photo Gallery Page</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>File:</strong> pages/PhotoGallery.js</p>
            <p className="mb-4"><strong>Purpose:</strong> Collect and display memorial photos</p>
            <p className="mb-4"><strong>Features:</strong></p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Upload photos from device</li>
              <li>Optional caption field</li>
              <li>Grid display (1/2/3/4 columns responsive)</li>
              <li>Hover zoom effect on images</li>
              <li>Upload progress indication</li>
              <li>Shows uploader's email</li>
            </ul>
            <p className="mt-4"><strong>Creates Entity:</strong> Photo</p>
            <p className="mt-2"><strong>Integration:</strong> Uses Core.UploadFile for image storage</p>
            <p className="mt-2"><strong>Empty State:</strong> Friendly message when no photos uploaded yet</p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8 page-break-before">4.11 Budget Tracker Page</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>File:</strong> pages/Budget.js</p>
            <p className="mb-4"><strong>Purpose:</strong> Track expenses and calculate fair splits</p>
            <p className="mb-4"><strong>Features:</strong></p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Add expenses with description, amount, category, date</li>
              <li>Categories: venue, catering, flowers, transportation, memorial, other</li>
              <li>Three summary cards:
                <ul className="ml-6 mt-2 space-y-1">
                  <li>• Total Expenses (sum of all)</li>
                  <li>• Per Person (total / inner circle count)</li>
                  <li>• Split Between (number of people)</li>
                </ul>
              </li>
              <li>Expense history list with details</li>
              <li>Shows who paid each expense</li>
              <li>Date formatting for readability</li>
            </ul>
            <p className="mt-4"><strong>Creates Entity:</strong> Expense</p>
            <p className="mt-2"><strong>Calculation Logic:</strong> Total expenses ÷ (current user + inner circle guests)</p>
            <p className="mt-2"><strong>Fair Split:</strong> Transparent cost sharing among coordination team</p>
          </div>
        </section>

        {/* 5. Components */}
        <section className="mb-12 page-break-before">
          <h2 className="text-3xl font-light mb-6 pb-3 border-b-2 border-gray-200">5. Components</h2>

          <h3 className="text-2xl font-light mb-4 mt-6">5.1 ChecklistManager Component</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>File:</strong> components/checklist/ChecklistManager.jsx</p>
            <p className="mb-4"><strong>Purpose:</strong> Reusable checklist component used across multiple pages</p>
            
            <p className="mb-2 mt-4"><strong>Props:</strong></p>
            <ul className="space-y-2 list-disc list-inside ml-4 mb-4">
              <li><code>category</code> - String: "funeral" | "wake" | "memorial"</li>
              <li><code>title</code> - String: Display title for the checklist</li>
              <li><code>defaultTasks</code> - Array: Pre-defined task strings (currently unused but available)</li>
            </ul>

            <p className="mb-2 mt-4"><strong>Features:</strong></p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Collapsible "Add Task" form</li>
              <li>Task input with title (required) and description (optional)</li>
              <li>Visual checkbox for completion (circle → check circle)</li>
              <li>Strike-through styling for completed tasks</li>
              <li>Progress counter (X of Y completed)</li>
              <li>Smooth animations on add/complete</li>
              <li>Filters tasks by category and funeral ID</li>
            </ul>

            <p className="mb-2 mt-4"><strong>Used By:</strong></p>
            <ul className="space-y-1 list-disc list-inside ml-4">
              <li>Funeral.js (category: "funeral")</li>
              <li>Wake.js (category: "wake")</li>
              <li>Memorial.js (category: "memorial")</li>
            </ul>
          </div>
        </section>

        {/* 6. Layout */}
        <section className="mb-12 page-break-before">
          <h2 className="text-3xl font-light mb-6 pb-3 border-b-2 border-gray-200">6. Layout</h2>

          <h3 className="text-2xl font-light mb-4 mt-6">Main Application Layout</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>File:</strong> Layout.js</p>
            <p className="mb-4"><strong>Structure:</strong> Sidebar navigation + main content area</p>
            
            <p className="mb-2 mt-4"><strong>Components:</strong></p>
            <ul className="space-y-2 list-disc list-inside ml-4 mb-4">
              <li><strong>Sidebar (shadcn/ui):</strong> Fixed navigation with collapsible mobile view</li>
              <li><strong>Header:</strong> Logo and app name with tagline</li>
              <li><strong>Navigation Menu:</strong> 9 main sections with icons</li>
              <li><strong>Support Card:</strong> Mental health resources (always visible)</li>
              <li><strong>Mobile Trigger:</strong> Hamburger menu for small screens</li>
            </ul>

            <p className="mb-2 mt-4"><strong>Navigation Items:</strong></p>
            <div className="ml-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-32">Home</span>
                <span className="text-gray-500">→ Dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-32">Invitations</span>
                <span className="text-gray-500">→ Invitations Page</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-32">Guest List</span>
                <span className="text-gray-500">→ Guest List Page</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-32">Funeral</span>
                <span className="text-gray-500">→ Funeral Page</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-32">The Wake</span>
                <span className="text-gray-500">→ Wake Page</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-32">Memorial</span>
                <span className="text-gray-500">→ Memorial Page</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-32">Inner Chat</span>
                <span className="text-gray-500">→ Inner Chat Page</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-32">Photo Gallery</span>
                <span className="text-gray-500">→ Photo Gallery Page</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-32">Budget</span>
                <span className="text-gray-500">→ Budget Page</span>
              </div>
            </div>

            <p className="mb-2 mt-6"><strong>Theme Implementation:</strong></p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>CSS custom properties defined in &lt;style&gt; tag</li>
              <li>Consistent color variables used throughout</li>
              <li>Gradient backgrounds on root container</li>
              <li>Active page highlighting with rose accent</li>
            </ul>

            <p className="mb-2 mt-4"><strong>Responsive Behavior:</strong></p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li><strong>Desktop:</strong> Sidebar always visible on left</li>
              <li><strong>Mobile:</strong> Sidebar hidden, accessible via hamburger trigger</li>
              <li><strong>Tablet:</strong> Collapsible sidebar with overlay</li>
            </ul>
          </div>
        </section>

        {/* 7. Database Entities */}
        <section className="mb-12 page-break-before">
          <h2 className="text-3xl font-light mb-6 pb-3 border-b-2 border-gray-200">7. Database Entities</h2>

          <p className="mb-6 leading-relaxed">
            All entities are stored in the base44 platform's database system. Each entity automatically includes built-in fields: <code>id</code>, <code>created_date</code>, <code>updated_date</code>, and <code>created_by</code>.
          </p>

          <h3 className="text-2xl font-light mb-4 mt-6">7.1 FuneralDetails Entity</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>File:</strong> entities/FuneralDetails.json</p>
            <p className="mb-4"><strong>Purpose:</strong> Core information about the deceased and funeral service</p>
            
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 pr-4">Field</th>
                  <th className="text-left py-2 pr-4">Type</th>
                  <th className="text-left py-2 pr-4">Required</th>
                  <th className="text-left py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">deceased_name</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Name of the deceased person</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">deceased_photo_url</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">URL of uploaded photo</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">birth_date</td>
                  <td className="py-2 pr-4">date</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Date of birth</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">death_date</td>
                  <td className="py-2 pr-4">date</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Date of passing</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">funeral_type</td>
                  <td className="py-2 pr-4">enum</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">catholic, humanist, other</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">funeral_date</td>
                  <td className="py-2 pr-4">datetime</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Date and time of service</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">funeral_location</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Venue address</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">obituary</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Memorial message or obituary text</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">relationship</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">User's relationship to deceased</td>
                </tr>
              </tbody>
            </table>
            
            <p className="mt-4"><strong>Usage:</strong> Created during Funeral Setup, referenced throughout app</p>
            <p className="mt-2"><strong>Relationships:</strong> One record per user/family</p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8 page-break-before">7.2 Guest Entity</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>File:</strong> entities/Guest.json</p>
            <p className="mb-4"><strong>Purpose:</strong> Track attendees and coordination team members</p>
            
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 pr-4">Field</th>
                  <th className="text-left py-2 pr-4">Type</th>
                  <th className="text-left py-2 pr-4">Required</th>
                  <th className="text-left py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">funeral_id</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Links to FuneralDetails</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">name</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Guest's full name</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">email</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Email address</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">phone</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Phone number</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">is_inner_circle</td>
                  <td className="py-2 pr-4">boolean</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Coordination team member (default: false)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">invitation_sent</td>
                  <td className="py-2 pr-4">boolean</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Email sent status (default: false)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">rsvp_status</td>
                  <td className="py-2 pr-4">enum</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">pending, attending, not_attending</td>
                </tr>
              </tbody>
            </table>
            
            <p className="mt-4"><strong>Special Field:</strong> is_inner_circle determines access to chat and budget features</p>
            <p className="mt-2"><strong>Relationships:</strong> Many guests per funeral</p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8 page-break-before">7.3 ChecklistItem Entity</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>File:</strong> entities/ChecklistItem.json</p>
            <p className="mb-4"><strong>Purpose:</strong> Task management for funeral, wake, and memorial planning</p>
            
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 pr-4">Field</th>
                  <th className="text-left py-2 pr-4">Type</th>
                  <th className="text-left py-2 pr-4">Required</th>
                  <th className="text-left py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">funeral_id</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Links to FuneralDetails</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">category</td>
                  <td className="py-2 pr-4">enum</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">funeral, wake, memorial</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">title</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Task title/name</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">description</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Additional details</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">completed</td>
                  <td className="py-2 pr-4">boolean</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Completion status (default: false)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">assigned_to</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Email of assigned person</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">due_date</td>
                  <td className="py-2 pr-4">date</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Task deadline</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">priority</td>
                  <td className="py-2 pr-4">enum</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">low, medium, high (default: medium)</td>
                </tr>
              </tbody>
            </table>
            
            <p className="mt-4"><strong>Category Separation:</strong> Tasks grouped by event type for organization</p>
            <p className="mt-2"><strong>Relationships:</strong> Many tasks per funeral, filtered by category</p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8 page-break-before">7.4 Expense Entity</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>File:</strong> entities/Expense.json</p>
            <p className="mb-4"><strong>Purpose:</strong> Financial tracking with automatic split calculation</p>
            
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 pr-4">Field</th>
                  <th className="text-left py-2 pr-4">Type</th>
                  <th className="text-left py-2 pr-4">Required</th>
                  <th className="text-left py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">funeral_id</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Links to FuneralDetails</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">description</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">What the expense was for</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">amount</td>
                  <td className="py-2 pr-4">number</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Cost in currency units</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">category</td>
                  <td className="py-2 pr-4">enum</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">venue, catering, flowers, transportation, memorial, other</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">paid_by</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Email of person who paid</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">date</td>
                  <td className="py-2 pr-4">date</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">When expense occurred</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">receipt_url</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Uploaded receipt image (future)</td>
                </tr>
              </tbody>
            </table>
            
            <p className="mt-4"><strong>Split Calculation:</strong> Total expenses ÷ number of inner circle members (including current user)</p>
            <p className="mt-2"><strong>Relationships:</strong> Many expenses per funeral</p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8 page-break-before">7.5 Photo Entity</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>File:</strong> entities/Photo.json</p>
            <p className="mb-4"><strong>Purpose:</strong> Gallery of memorial photos</p>
            
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 pr-4">Field</th>
                  <th className="text-left py-2 pr-4">Type</th>
                  <th className="text-left py-2 pr-4">Required</th>
                  <th className="text-left py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">funeral_id</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Links to FuneralDetails</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">photo_url</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">URL of uploaded image</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">caption</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Optional description or memory</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">uploaded_by</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Email of uploader</td>
                </tr>
              </tbody>
            </table>
            
            <p className="mt-4"><strong>Storage:</strong> Uses base44 Core.UploadFile integration for image hosting</p>
            <p className="mt-2"><strong>Relationships:</strong> Many photos per funeral</p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8 page-break-before">7.6 Message Entity</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>File:</strong> entities/Message.json</p>
            <p className="mb-4"><strong>Purpose:</strong> Inner circle group chat messages</p>
            
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 pr-4">Field</th>
                  <th className="text-left py-2 pr-4">Type</th>
                  <th className="text-left py-2 pr-4">Required</th>
                  <th className="text-left py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">funeral_id</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Links to FuneralDetails</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">sender_email</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Who sent the message</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">sender_name</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Display name of sender</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">content</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Message text</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">timestamp</td>
                  <td className="py-2 pr-4">datetime</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">When message was sent</td>
                </tr>
              </tbody>
            </table>
            
            <p className="mt-4"><strong>Real-time Updates:</strong> InnerChat page auto-refreshes every 3 seconds</p>
            <p className="mt-2"><strong>Relationships:</strong> Many messages per funeral</p>
            <p className="mt-2"><strong>Access:</strong> Only visible to inner circle members</p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8 page-break-before">7.7 Invitation Entity</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>File:</strong> entities/Invitation.json</p>
            <p className="mb-4"><strong>Purpose:</strong> E-invitation customization and storage</p>
            
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 pr-4">Field</th>
                  <th className="text-left py-2 pr-4">Type</th>
                  <th className="text-left py-2 pr-4">Required</th>
                  <th className="text-left py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">funeral_id</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Links to FuneralDetails</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">template</td>
                  <td className="py-2 pr-4">enum</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">classic, modern, floral (default: classic)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">custom_message</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Personal message to add to invitation</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">event_details</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Additional event information (future use)</td>
                </tr>
              </tbody>
            </table>
            
            <p className="mt-4"><strong>Templates:</strong> Three visual styles with different gradients and layouts</p>
            <p className="mt-2"><strong>Auto-population:</strong> Pulls deceased name, dates, location from FuneralDetails</p>
            <p className="mt-2"><strong>Relationships:</strong> One invitation per funeral</p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8 page-break-before">7.8 User Entity (Built-in)</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>Type:</strong> Built-in entity (provided by base44 platform)</p>
            <p className="mb-4"><strong>Purpose:</strong> Authentication and user management</p>
            
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 pr-4">Field</th>
                  <th className="text-left py-2 pr-4">Type</th>
                  <th className="text-left py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">id</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2">Unique user identifier</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">full_name</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2">User's display name</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">email</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2">Email address (unique)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4 font-mono">role</td>
                  <td className="py-2 pr-4">enum</td>
                  <td className="py-2">admin or user</td>
                </tr>
              </tbody>
            </table>
            
            <p className="mt-4"><strong>Access Method:</strong> <code>await base44.auth.me()</code></p>
            <p className="mt-2"><strong>Update Method:</strong> <code>await base44.auth.updateMe(data)</code></p>
            <p className="mt-2"><strong>Note:</strong> Cannot be modified directly; built-in fields are protected</p>
          </div>
        </section>

        {/* 8. Key Features */}
        <section className="mb-12 page-break-before">
          <h2 className="text-3xl font-light mb-6 pb-3 border-b-2 border-gray-200">8. Key Features</h2>

          <h3 className="text-2xl font-light mb-4 mt-6">8.1 Compassionate Design</h3>
          <ul className="space-y-2 list-disc list-inside ml-4 mb-6">
            <li>Dark, calming color scheme reduces eye strain and creates peaceful atmosphere</li>
            <li>Soft animations and transitions (300-800ms) avoid jarring movements</li>
            <li>Generous white space and padding allow content to breathe</li>
            <li>Mobile-first responsive layout works on all devices</li>
            <li>Consistent visual language throughout the application</li>
          </ul>

          <h3 className="text-2xl font-light mb-4 mt-6">8.2 Complete Planning Suite</h3>
          <ul className="space-y-2 list-disc list-inside ml-4 mb-6">
            <li>Separate checklists for funeral, wake, and memorial events</li>
            <li>Guest management with RSVP tracking capabilities</li>
            <li>Beautiful e-invitation creation with three templates</li>
            <li>Photo gallery for preserving and sharing memories</li>
            <li>Progress tracking on all checklists</li>
          </ul>

          <h3 className="text-2xl font-light mb-4 mt-6">8.3 Team Coordination</h3>
          <ul className="space-y-2 list-disc list-inside ml-4 mb-6">
            <li>"Inner Circle" designation for coordination team members</li>
            <li>Private group chat with real-time updates (3-second refresh)</li>
            <li>Task assignment capabilities (field available for future use)</li>
            <li>Shared expense tracking visible to all team members</li>
            <li>Clear distinction between inner circle and regular guests</li>
          </ul>

          <h3 className="text-2xl font-light mb-4 mt-6">8.4 Financial Transparency</h3>
          <ul className="space-y-2 list-disc list-inside ml-4 mb-6">
            <li>Comprehensive expense logging with categories</li>
            <li>Automatic split calculation among inner circle</li>
            <li>Per-person breakdown displayed prominently</li>
            <li>Expense history with dates and payer information</li>
            <li>Category organization (venue, catering, flowers, etc.)</li>
            <li>Receipt upload capability (prepared for future use)</li>
          </ul>

          <h3 className="text-2xl font-light mb-4 mt-6">8.5 Mental Health Support</h3>
          <ul className="space-y-2 list-disc list-inside ml-4 mb-6">
            <li>Support card in sidebar (always accessible on every page)</li>
            <li>Placeholder for external mental health provider integration</li>
            <li>Gentle, supportive messaging throughout the interface</li>
            <li>24/7 availability message to reassure users</li>
            <li>"Take it slow" philosophy embedded in design</li>
          </ul>

          <h3 className="text-2xl font-light mb-4 mt-6">8.6 Memory Preservation</h3>
          <ul className="space-y-2 list-disc list-inside ml-4 mb-6">
            <li>Photo upload and gallery with captions</li>
            <li>Obituary/memorial message storage</li>
            <li>Invitation archive (saved in database)</li>
            <li>Chat history for future reference</li>
            <li>Permanent record of all planning details</li>
          </ul>
        </section>

        {/* 9. Technical Stack */}
        <section className="mb-12 page-break-before">
          <h2 className="text-3xl font-light mb-6 pb-3 border-b-2 border-gray-200">9. Technical Stack</h2>

          <h3 className="text-2xl font-light mb-4 mt-6">Frontend Technologies</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="space-y-3">
              <li><strong>React:</strong> UI framework (v18+)</li>
              <li><strong>React Router:</strong> Client-side routing and navigation</li>
              <li><strong>Tailwind CSS:</strong> Utility-first styling framework</li>
              <li><strong>shadcn/ui:</strong> High-quality component library</li>
              <li><strong>Framer Motion:</strong> Animation library for smooth transitions</li>
              <li><strong>Lucide React:</strong> Icon library with 1000+ icons</li>
              <li><strong>date-fns:</strong> Modern date utility library</li>
              <li><strong>@tanstack/react-query:</strong> Data fetching and state management</li>
            </ul>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-6">Backend Platform (base44)</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="space-y-3">
              <li><strong>Entities API:</strong> Full CRUD operations on data structures</li>
              <li><strong>Auth API:</strong> User authentication and authorization</li>
              <li><strong>File Upload Integration:</strong> Image and document storage</li>
              <li><strong>Email Integration:</strong> Planned for invitation sending</li>
              <li><strong>Automatic Database:</strong> No manual database setup required</li>
            </ul>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-6">Data Management</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="space-y-3">
              <li><strong>React Query:</strong> Server state management with caching</li>
              <li><strong>Optimistic Updates:</strong> Instant UI feedback on mutations</li>
              <li><strong>Auto-refresh:</strong> Real-time updates (chat: 3-second interval)</li>
              <li><strong>Query Invalidation:</strong> Automatic data refetching after changes</li>
              <li><strong>Error Handling:</strong> Graceful error states throughout</li>
            </ul>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-6">Development Tools</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="space-y-3">
              <li><strong>base44 Platform:</strong> Development and deployment environment</li>
              <li><strong>Hot Reload:</strong> Instant preview of code changes</li>
              <li><strong>Built-in Database:</strong> No external database configuration needed</li>
              <li><strong>Automatic API Generation:</strong> Entities create APIs automatically</li>
            </ul>
          </div>
        </section>

        {/* 10. User Flow */}
        <section className="mb-12 page-break-before">
          <h2 className="text-3xl font-light mb-6 pb-3 border-b-2 border-gray-200">10. User Flow</h2>

          <h3 className="text-2xl font-light mb-4 mt-6">10.1 First-Time User Journey</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ol className="space-y-4">
              <li>
                <strong>1. Welcome Page</strong>
                <p className="ml-4 mt-1 text-sm text-gray-700">User sees introduction and feature overview, clicks "Begin the journey"</p>
              </li>
              <li>
                <strong>2. Funeral Setup</strong>
                <p className="ml-4 mt-1 text-sm text-gray-700">User enters deceased information, uploads photo, sets service details</p>
              </li>
              <li>
                <strong>3. Dashboard</strong>
                <p className="ml-4 mt-1 text-sm text-gray-700">User arrives at main hub, sees 8 feature cards</p>
              </li>
              <li>
                <strong>4. Guest List</strong>
                <p className="ml-4 mt-1 text-sm text-gray-700">User adds attendees and designates inner circle coordination team</p>
              </li>
              <li>
                <strong>5. Checklists</strong>
                <p className="ml-4 mt-1 text-sm text-gray-700">User works through funeral, wake, and memorial planning tasks</p>
              </li>
              <li>
                <strong>6. Invitations</strong>
                <p className="ml-4 mt-1 text-sm text-gray-700">User creates beautiful e-invitation to share with family and friends</p>
              </li>
              <li>
                <strong>7. Chat & Coordination</strong>
                <p className="ml-4 mt-1 text-sm text-gray-700">Inner circle uses chat to coordinate activities and decisions</p>
              </li>
              <li>
                <strong>8. Budget Tracking</strong>
                <p className="ml-4 mt-1 text-sm text-gray-700">Team logs expenses as they occur, sees fair split calculation</p>
              </li>
              <li>
                <strong>9. Memory Gathering</strong>
                <p className="ml-4 mt-1 text-sm text-gray-700">Family and friends upload photos to shared gallery</p>
              </li>
            </ol>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8">10.2 Returning User Experience</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ol className="space-y-3">
              <li><strong>1. Automatic Login</strong> - If session is active, user goes directly to dashboard</li>
              <li><strong>2. Dashboard Access</strong> - Quick navigation to any section</li>
              <li><strong>3. Real-time Updates</strong> - Chat shows new messages automatically</li>
              <li><strong>4. Progress Visibility</strong> - Checklist completion rates displayed</li>
              <li><strong>5. Continuous Access</strong> - All data persists between sessions</li>
            </ol>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8">10.3 Typical Daily Usage Pattern</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4">During active funeral planning period:</p>
            <ul className="space-y-3 list-disc list-inside ml-4">
              <li>Morning: Check chat for updates from coordination team</li>
              <li>Throughout day: Mark checklist items as complete</li>
              <li>As expenses occur: Log them immediately in budget tracker</li>
              <li>Evening: Review progress, send messages to team</li>
              <li>Any time: Upload photos to gallery as they're received</li>
            </ul>
          </div>
        </section>

        {/* 11. Integration Points */}
        <section className="mb-12 page-break-before">
          <h2 className="text-3xl font-light mb-6 pb-3 border-b-2 border-gray-200">11. Integration Points</h2>

          <h3 className="text-2xl font-light mb-4 mt-6">11.1 File Upload Integration</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-3"><strong>Method:</strong> <code>base44.integrations.Core.UploadFile</code></p>
            <p className="mb-3"><strong>Used By:</strong></p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Funeral Setup page (deceased photo)</li>
              <li>Photo Gallery page (memorial photos)</li>
            </ul>
            <p className="mt-3"><strong>Returns:</strong> <code>{`{ file_url: string }`}</code></p>
            <p className="mt-2"><strong>Storage:</strong> Public URLs accessible to all users</p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8">11.2 Authentication Integration</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-3"><strong>Method:</strong> <code>base44.auth.me()</code></p>
            <p className="mb-3"><strong>Used By:</strong> All pages that need user context</p>
            <p className="mb-3"><strong>Provides:</strong></p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>User email</li>
              <li>Full name</li>
              <li>User ID</li>
              <li>Role (admin/user)</li>
            </ul>
            <p className="mt-3"><strong>Update Method:</strong> <code>base44.auth.updateMe(data)</code></p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8">11.3 Email Integration (Planned)</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-3"><strong>Method:</strong> <code>base44.integrations.Core.SendEmail</code></p>
            <p className="mb-3"><strong>Planned Use:</strong> Send invitations directly from app to guest list</p>
            <p className="mb-3"><strong>Status:</strong> Infrastructure ready, feature not yet implemented</p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8">11.4 Mental Health Support (Future)</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-3"><strong>Current State:</strong> Placeholder in sidebar with "Get Help" button</p>
            <p className="mb-3"><strong>Planned:</strong> Connect to external crisis support provider</p>
            <p className="mb-3"><strong>Location:</strong> Accessible from every page via sidebar</p>
          </div>
        </section>

        {/* 12. Security & Access Control */}
        <section className="mb-12 page-break-before">
          <h2 className="text-3xl font-light mb-6 pb-3 border-b-2 border-gray-200">12. Security & Access Control</h2>

          <h3 className="text-2xl font-light mb-4 mt-6">12.1 Inner Circle Privileges</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-3"><strong>Designation:</strong> Guests marked with <code>is_inner_circle: true</code></p>
            <p className="mb-3"><strong>Special Access:</strong></p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Can view and participate in Inner Chat</li>
              <li>Can add expenses to budget tracker</li>
              <li>Included in expense split calculations</li>
              <li>Can assign tasks (infrastructure ready)</li>
            </ul>
            <p className="mt-3"><strong>Visual Distinction:</strong> Special badges and separate section in guest list</p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8">12.2 Data Isolation</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-3"><strong>Principle:</strong> All entities filtered by <code>funeral_id</code></p>
            <p className="mb-3"><strong>Implementation:</strong></p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Queries always filter: <code>{"{ funeral_id: currentFuneral.id }"}</code></li>
              <li>Users only see data for their own funeral</li>
              <li>Multiple families can use app simultaneously without interference</li>
            </ul>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8">12.3 File Storage Security</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-3"><strong>Current:</strong> Public URLs for photos and images</p>
            <p className="mb-3"><strong>Reason:</strong> Easy sharing and display without auth complexity</p>
            <p className="mb-3"><strong>Future Option:</strong> Private storage with signed URLs available if needed</p>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8">12.4 Authentication</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-3"><strong>Provider:</strong> base44 platform handles all auth</p>
            <p className="mb-3"><strong>Features:</strong></p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Secure login/logout</li>
              <li>Session management</li>
              <li>Password reset</li>
              <li>User invitations</li>
            </ul>
          </div>
        </section>

        {/* 13. Responsive Design */}
        <section className="mb-12 page-break-before">
          <h2 className="text-3xl font-light mb-6 pb-3 border-b-2 border-gray-200">13. Responsive Design</h2>

          <h3 className="text-2xl font-light mb-4 mt-6">13.1 Breakpoints</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 pr-4">Device</th>
                  <th className="text-left py-2 pr-4">Breakpoint</th>
                  <th className="text-left py-2">Layout</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4">Mobile</td>
                  <td className="py-2 pr-4">&lt; 768px</td>
                  <td className="py-2">Single column, hamburger menu</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4">Tablet</td>
                  <td className="py-2 pr-4">768px - 1024px</td>
                  <td className="py-2">2-column grids, collapsible sidebar</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4">Desktop</td>
                  <td className="py-2 pr-4">&gt; 1024px</td>
                  <td className="py-2">3-4 column grids, fixed sidebar</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8">13.2 Mobile Optimizations</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="space-y-3 list-disc list-inside">
              <li><strong>Touch Targets:</strong> Minimum 44x44px for all interactive elements</li>
              <li><strong>Navigation:</strong> Hamburger menu reveals sidebar overlay</li>
              <li><strong>Forms:</strong> Stack vertically on mobile for easier input</li>
              <li><strong>Cards:</strong> Full-width on mobile, grid on larger screens</li>
              <li><strong>Images:</strong> Responsive sizing with object-fit</li>
              <li><strong>Typography:</strong> Scales appropriately for smaller screens</li>
            </ul>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8">13.3 Grid Layouts</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="space-y-3 list-disc list-inside">
              <li><strong>Dashboard:</strong> 1 → 2 → 4 columns</li>
              <li><strong>Photo Gallery:</strong> 1 → 2 → 3 → 4 columns</li>
              <li><strong>Guest List:</strong> 1 → 2 columns (stacked on mobile)</li>
              <li><strong>Budget Cards:</strong> 1 → 2 → 3 columns</li>
            </ul>
          </div>
        </section>

        {/* 14. Future Enhancements */}
        <section className="mb-12 page-break-before">
          <h2 className="text-3xl font-light mb-6 pb-3 border-b-2 border-gray-200">14. Future Enhancements</h2>

          <h3 className="text-2xl font-light mb-4 mt-6">14.1 Planned Features</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <div className="space-y-4">
              <div>
                <strong className="block mb-1">1. RSVP Tracking</strong>
                <p className="text-sm text-gray-700 ml-4">Guest confirmation system with attending/not attending status</p>
              </div>
              <div>
                <strong className="block mb-1">2. Email Invitations</strong>
                <p className="text-sm text-gray-700 ml-4">Send invites directly from app to guest list emails</p>
              </div>
              <div>
                <strong className="block mb-1">3. Mental Health Integration</strong>
                <p className="text-sm text-gray-700 ml-4">Connect to real crisis support hotlines and resources</p>
              </div>
              <div>
                <strong className="block mb-1">4. Receipt Upload</strong>
                <p className="text-sm text-gray-700 ml-4">Attach receipt images to expense entries</p>
              </div>
              <div>
                <strong className="block mb-1">5. Calendar Integration</strong>
                <p className="text-sm text-gray-700 ml-4">Sync funeral date and checklist deadlines to calendar apps</p>
              </div>
              <div>
                <strong className="block mb-1">6. Notifications</strong>
                <p className="text-sm text-gray-700 ml-4">Reminders for tasks, deadlines, and new chat messages</p>
              </div>
              <div>
                <strong className="block mb-1">7. Multi-language Support</strong>
                <p className="text-sm text-gray-700 ml-4">Internationalization for global use</p>
              </div>
              <div>
                <strong className="block mb-1">8. Printable Checklists</strong>
                <p className="text-sm text-gray-700 ml-4">PDF export of checklists for offline reference</p>
              </div>
              <div>
                <strong className="block mb-1">9. Video Tributes</strong>
                <p className="text-sm text-gray-700 ml-4">Upload and play video memories in gallery</p>
              </div>
              <div>
                <strong className="block mb-1">10. Memorial Website</strong>
                <p className="text-sm text-gray-700 ml-4">Public-facing tribute page to share with extended family</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8">14.2 Technical Improvements</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="space-y-3 list-disc list-inside">
              <li><strong>Offline Support:</strong> Progressive Web App with service workers</li>
              <li><strong>Push Notifications:</strong> Real-time alerts for important updates</li>
              <li><strong>Advanced Analytics:</strong> Expense charts, task completion rates</li>
              <li><strong>Bulk Guest Import:</strong> CSV upload for large guest lists</li>
              <li><strong>Role-based Permissions:</strong> Fine-grained access control</li>
              <li><strong>File Compression:</strong> Optimize image sizes for faster loading</li>
              <li><strong>Search Functionality:</strong> Find guests, tasks, expenses quickly</li>
            </ul>
          </div>
        </section>

        {/* 15. Getting Started */}
        <section className="mb-12 page-break-before">
          <h2 className="text-3xl font-light mb-6 pb-3 border-b-2 border-gray-200">15. Getting Started</h2>

          <h3 className="text-2xl font-light mb-4 mt-6">15.1 For Users</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ol className="space-y-3 list-decimal list-inside">
              <li><strong>Begin at Welcome Page</strong> - Read the introduction and click "Begin the journey"</li>
              <li><strong>Complete Funeral Setup</strong> - Enter your loved one's information and service details</li>
              <li><strong>Explore Dashboard</strong> - Familiarize yourself with the eight main sections</li>
              <li><strong>Add Inner Circle First</strong> - Designate your coordination team members</li>
              <li><strong>Start Planning</strong> - Work through checklists at your own pace</li>
              <li><strong>Use Chat</strong> - Coordinate with your team in real-time</li>
              <li><strong>Track Expenses</strong> - Log costs as they occur for fair splitting</li>
              <li><strong>Gather Memories</strong> - Upload photos to the shared gallery</li>
            </ol>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8">15.2 For Developers</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="space-y-3 list-disc list-inside">
              <li>All entities auto-create on first use (no manual setup)</li>
              <li>User entity is built-in (never create manually)</li>
              <li>Start with Welcome or Dashboard page for testing</li>
              <li>Layout wraps all pages automatically</li>
              <li>File uploads go through Core.UploadFile integration</li>
              <li>Use React Query for all data fetching</li>
              <li>Follow existing naming conventions for consistency</li>
            </ul>
          </div>

          <h3 className="text-2xl font-light mb-4 mt-8">15.3 Best Practices</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="space-y-3 list-disc list-inside">
              <li><strong>Take Your Time:</strong> The app is designed for a gradual, thoughtful process</li>
              <li><strong>Invite Your Team:</strong> Inner circle members make coordination much easier</li>
              <li><strong>Log Expenses Promptly:</strong> Track costs as they happen for accuracy</li>
              <li><strong>Use Checklists:</strong> They ensure nothing important is forgotten</li>
              <li><strong>Collect Photos Early:</strong> Gather memories while they're fresh</li>
              <li><strong>Communicate Often:</strong> Use the chat to keep everyone aligned</li>
            </ul>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12 page-break-before">
          <h2 className="text-3xl font-light mb-6 pb-3 border-b-2 border-gray-200">Conclusion</h2>
          
          <div className="space-y-6 leading-relaxed">
            <p>
              <strong className="text-[#d4a5a5]">In Remembrance</strong> is more than just a planning tool—it's a compassionate companion during one of life's most difficult experiences. By combining practical organization features with supportive design and team coordination capabilities, it helps families navigate the complex process of honoring their loved ones.
            </p>
            
            <p>
              The application's thoughtful architecture—from its calming dark theme to its comprehensive entity structure—reflects a deep understanding of what families need during grief. Every feature, from the gentle animations to the transparent expense tracking, is designed to reduce stress and foster connection.
            </p>
            
            <p>
              Whether you're a user planning a memorial service or a developer extending the platform, this documentation provides the foundation you need to understand and work with In Remembrance effectively.
            </p>
            
            <p className="text-center text-[#a3a3a3] mt-12 pt-12 border-t border-gray-200">
              Take it slow. We're here for you.
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-16 pt-8 border-t border-gray-200">
          <p>In Remembrance - Funeral Planning Application</p>
          <p className="mt-2">Documentation Version 1.0</p>
          <p className="mt-2">{new Date().getFullYear()} • Built with compassion</p>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          @page {
            size: A4;
            margin: 2cm;
          }
          
          .page-break-before {
            page-break-before: always;
          }
          
          .page-break-after {
            page-break-after: always;
          }
          
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
}