export const mockTodos = [
  {
    category: "This week",
    items: [
      { id: 1, text: "Design onboarding", completed: false },
      { id: 2, text: "Write hiring criteria", completed: false },
      { id: 3, text: "Publish blog post", completed: false },
      { id: 4, text: "Book offsite", completed: false },
      { id: 5, text: "Set up Zapier integration", completed: false },
    ],
  },
  {
    category: "Personal",
    items: [
      { id: 6, text: "Buy more coffee filters", completed: false },
      { id: 7, text: "Cancel Disney+", completed: true },
      { id: 8, text: "Donate to AMF", completed: false },
    ],
  },
  {
    category: "Series to watch",
    items: [
      { id: 9, text: "Mare of Easttown", completed: false },
      { id: 10, text: "Scenes from a Marriage", completed: false },
    ],
  }
];

export const mockEvents = [
  // Day 0 = Mon, Day 1 = Tue, Day 2 = Wed, etc.
  { id: 1, title: "Monday sync", day: 0, start: 9.0, end: 9.75, color: "purple" },
  { id: 2, title: "Emails", day: 0, start: 10.5, end: 11.25, color: "blue" },
  { id: 3, title: "Learn Framer", day: 0, start: 11.25, end: 12.0, color: "blue" },
  { id: 4, title: "Lunch break", day: 0, start: 12.0, end: 13.0, color: "green" },
  { id: 5, title: "Planning", day: 0, start: 14.0, end: 15.0, color: "purple" },
  { id: 6, title: "Design onboarding", day: 0, start: 15.0, end: 16.5, color: "blue" },
  { id: 7, title: "Yoga", day: 0, start: 17.5, end: 18.5, color: "gray" },

  { id: 8, title: "Design onboarding", day: 1, start: 9.0, end: 12.0, color: "blue" },
  { id: 9, title: "Lunch break", day: 1, start: 12.0, end: 13.0, color: "green" },
  { id: 10, title: "Write hiring criteria", day: 1, start: 13.5, end: 15.5, color: "blue" },
  { id: 11, title: "Blog post", day: 1, start: 16.0, end: 17.0, color: "blue" },

  { id: 12, title: "Weekly design", day: 2, start: 8.0, end: 9.0, color: "purple" },
  { id: 13, title: "Research offsite", day: 2, start: 9.0, end: 10.0, color: "blue" },
  { id: 14, title: "Upload video", day: 2, start: 10.0, end: 11.0, color: "blue" },
  { id: 15, title: "Lunch with Eric", day: 2, start: 12.0, end: 13.0, color: "green" },
];