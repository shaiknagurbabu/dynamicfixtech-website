export const dashboardSummary = {
  metrics: {
    activeJobs: 24,
    completedToday: 18,
    revenueThisMonth: 28450,
    customerSatisfaction: 4.8,
  },
  weeklyCompleted: 126,
  recentJobs: [
    { id: "DF-2048", customer: "Olivia Martin", location: "Brooklyn, NY", service: "HVAC repair", technician: "Marcus Lee", status: "In progress", avatarTone: "blue" },
    { id: "DF-2047", customer: "Ethan Brooks", location: "Queens, NY", service: "Pipe inspection", technician: "Nina Patel", status: "Scheduled", avatarTone: "pink" },
    { id: "DF-2046", customer: "Sophia Turner", location: "Manhattan, NY", service: "Electrical", technician: "Alex Chen", status: "Completed", avatarTone: "green" },
    { id: "DF-2045", customer: "Liam Cooper", location: "Jersey City, NJ", service: "Appliance repair", technician: "Marcus Lee", status: "Needs review", avatarTone: "amber" },
  ],
  technicians: [
    { name: "Marcus Lee", role: "Senior technician", availability: "On job", avatarTone: "blue" },
    { name: "Nina Patel", role: "HVAC specialist", availability: "Available", avatarTone: "pink" },
    { name: "Alex Chen", role: "Electrician", availability: "Available", avatarTone: "green" },
    { name: "Sam Rivera", role: "Field technician", availability: "Offline", avatarTone: "amber" },
  ],
  activity: [
    { icon: "✓", title: "Work order completed", description: "Alex Chen completed DF-2046 for Sophia Turner.", time: "12 minutes ago" },
    { icon: "＋", title: "New work order assigned", description: "DF-2048 was assigned to Marcus Lee.", time: "38 minutes ago" },
    { icon: "$", title: "Payment received", description: "$285.00 payment received from Olivia Martin.", time: "1 hour ago" },
  ],
};
