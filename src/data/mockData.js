// Mock data for NextDaySite 2.0 Customer and Admin Apps

export const mockUsers = [
  {
    id: 1,
    name: "Sarah Chen",
    email: "sarah@techstart.com",
    avatar: "SC",
    role: "customer",
    company: "TechStart Inc.",
    plan: "Pro",
    joinedAt: "2024-01-15"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    email: "marcus@creative.com",
    avatar: "MR",
    role: "customer",
    company: "Creative Agency",
    plan: "Enterprise",
    joinedAt: "2024-02-20"
  },
  {
    id: 3,
    name: "Emily Johnson",
    email: "emily@ecommerce.com",
    avatar: "EJ",
    role: "customer",
    company: "E-commerce Store",
    plan: "Starter",
    joinedAt: "2024-03-10"
  },
  {
    id: 4,
    name: "Admin User",
    email: "admin@nextdaysite.com",
    avatar: "AU",
    role: "admin",
    company: "NextDaySite",
    plan: "Admin",
    joinedAt: "2023-01-01"
  }
]

export const mockProjects = [
  {
    id: 1,
    title: "TechStart Landing Page",
    status: "In Progress",
    lastUpdated: "2024-10-06",
    assignee: "AI Designer",
    tags: ["Landing Page", "SaaS", "B2B"],
    briefSummary: "Modern landing page for a tech startup with focus on conversions",
    customerId: 1,
    links: {
      designPreview: "https://preview.nextdaysite.com/techstart",
      stagingURL: "https://staging.techstart.com"
    },
    progress: 75
  },
  {
    id: 2,
    title: "Creative Portfolio Site",
    status: "Ready to Ship",
    lastUpdated: "2024-10-05",
    assignee: "AI Designer",
    tags: ["Portfolio", "Creative", "Photography"],
    briefSummary: "Photography portfolio with gallery and booking system",
    customerId: 2,
    links: {
      designPreview: "https://preview.nextdaysite.com/creative",
      stagingURL: "https://staging.creative.com"
    },
    progress: 100
  },
  {
    id: 3,
    title: "E-commerce Store",
    status: "Done",
    lastUpdated: "2024-10-04",
    assignee: "AI Designer",
    tags: ["E-commerce", "Shopify", "Fashion"],
    briefSummary: "Fashion e-commerce store with product catalog and checkout",
    customerId: 3,
    links: {
      designPreview: "https://preview.nextdaysite.com/fashion",
      stagingURL: "https://staging.fashion.com"
    },
    progress: 100
  },
  {
    id: 4,
    title: "Restaurant Website",
    status: "Start",
    lastUpdated: "2024-10-07",
    assignee: "AI Designer",
    tags: ["Restaurant", "Menu", "Booking"],
    briefSummary: "Restaurant website with online menu and reservation system",
    customerId: 1,
    links: {
      designPreview: null,
      stagingURL: null
    },
    progress: 0
  },
  {
    id: 5,
    title: "Corporate Website",
    status: "Shipped",
    lastUpdated: "2024-09-28",
    assignee: "AI Designer",
    tags: ["Corporate", "B2B", "Services"],
    briefSummary: "Professional corporate website with service pages",
    customerId: 2,
    links: {
      designPreview: "https://preview.nextdaysite.com/corporate",
      stagingURL: "https://corporate.com"
    },
    progress: 100
  }
]

export const mockInvoices = [
  {
    id: 1,
    amount: 2999,
    status: "Paid",
    issuedAt: "2024-09-01",
    dueAt: "2024-09-15",
    projectId: 1,
    customerId: 1
  },
  {
    id: 2,
    amount: 4999,
    status: "Due",
    issuedAt: "2024-10-01",
    dueAt: "2024-10-15",
    projectId: 2,
    customerId: 2
  },
  {
    id: 3,
    amount: 1999,
    status: "Paid",
    issuedAt: "2024-08-15",
    dueAt: "2024-08-30",
    projectId: 3,
    customerId: 3
  }
]

export const mockFiles = [
  {
    id: 1,
    name: "hero-wireframe.png",
    size: "2.4 MB",
    type: "image",
    tags: ["wireframe", "hero", "design"],
    uploadedAt: "2024-10-06",
    previewURL: "/api/files/1/preview",
    projectId: 1
  },
  {
    id: 2,
    name: "brand-guidelines.pdf",
    size: "5.1 MB",
    type: "document",
    tags: ["branding", "guidelines", "colors"],
    uploadedAt: "2024-10-05",
    previewURL: "/api/files/2/preview",
    projectId: 1
  },
  {
    id: 3,
    name: "product-photos.zip",
    size: "45.2 MB",
    type: "archive",
    tags: ["photos", "products", "assets"],
    uploadedAt: "2024-10-04",
    previewURL: "/api/files/3/preview",
    projectId: 3
  },
  {
    id: 4,
    name: "logo-variations.ai",
    size: "12.8 MB",
    type: "design",
    tags: ["logo", "branding", "vector"],
    uploadedAt: "2024-10-03",
    previewURL: "/api/files/4/preview",
    projectId: 2
  }
]

export const mockChatMessages = [
  {
    id: 1,
    role: "user",
    content: "Can you update the hero section to be more modern?",
    timestamp: "2024-10-07T10:30:00Z",
    hasAttachments: false,
    projectId: 1
  },
  {
    id: 2,
    role: "ai",
    content: "I'll update the hero section with a more modern design. Here's what I'm thinking:",
    timestamp: "2024-10-07T10:31:00Z",
    hasAttachments: true,
    projectId: 1
  },
  {
    id: 3,
    role: "system",
    content: "Project brief updated with new requirements",
    timestamp: "2024-10-07T10:32:00Z",
    hasAttachments: false,
    projectId: 1
  }
]

export const mockActivities = [
  {
    id: 1,
    type: "project_created",
    description: "Project created by AI Designer",
    timestamp: "2024-10-01T09:00:00Z",
    projectId: 1,
    userId: 4
  },
  {
    id: 2,
    type: "design_generated",
    description: "Initial wireframes generated",
    timestamp: "2024-10-01T09:15:00Z",
    projectId: 1,
    userId: 4
  },
  {
    id: 3,
    type: "customer_feedback",
    description: "Customer requested hero section updates",
    timestamp: "2024-10-07T10:30:00Z",
    projectId: 1,
    userId: 1
  },
  {
    id: 4,
    type: "status_changed",
    description: "Status changed from Start to In Progress",
    timestamp: "2024-10-01T10:00:00Z",
    projectId: 1,
    userId: 4
  }
]

export const statusColors = {
  "Start": "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
  "In Progress": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "Done": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Ready to Ship": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  "Shipped": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
}

export const planColors = {
  "Starter": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Pro": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "Enterprise": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
}
