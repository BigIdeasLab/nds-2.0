import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Avatar, AvatarFallback } from '@/components/ui/avatar.jsx'
import { 
  Plus, 
  Filter, 
  Search, 
  MoreHorizontal,
  Calendar,
  User,
  MessageSquare,
  Paperclip,
  Eye
} from 'lucide-react'
import { mockProjects, mockUsers, statusColors } from '../../data/mockData'

const ProjectBoard = () => {
  const [viewMode, setViewMode] = useState('kanban') // kanban or list
  
  // Group projects by status for Kanban view
  const kanbanColumns = [
    { id: 'Start', title: 'Start', color: 'border-gray-300' },
    { id: 'In Progress', title: 'In Progress', color: 'border-blue-300' },
    { id: 'Done', title: 'Done', color: 'border-green-300' },
    { id: 'Ready to Ship', title: 'Ready to Ship', color: 'border-yellow-300' },
    { id: 'Shipped', title: 'Shipped', color: 'border-purple-300' }
  ]

  const getProjectsByStatus = (status) => {
    return mockProjects.filter(project => project.status === status)
  }

  const getAssigneeAvatar = (assigneeName) => {
    const user = mockUsers.find(u => u.name === assigneeName)
    return user ? user.avatar : 'AI'
  }

  const ProjectCard = ({ project }) => (
    <Card className="mb-4 hover:shadow-md transition-shadow cursor-pointer group">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <Link to={`/projects/${project.id}`}>
              <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </Link>
            <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
              {project.briefSummary}
            </p>
          </div>
          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>

        {/* Progress */}
        <div className="mb-3">
          <div className="flex justify-between text-xs mb-1">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-1" />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.slice(0, 2).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs px-2 py-0">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 2 && (
            <Badge variant="secondary" className="text-xs px-2 py-0">
              +{project.tags.length - 2}
            </Badge>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="w-6 h-6">
              <AvatarFallback className="text-xs">
                {getAssigneeAvatar(project.assignee)}
              </AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">{project.assignee}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <MessageSquare className="w-3 h-3" />
            </Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <Paperclip className="w-3 h-3" />
            </Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <Eye className="w-3 h-3" />
            </Button>
          </div>
        </div>

        {/* Last updated */}
        <div className="mt-2 pt-2 border-t">
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="w-3 h-3 mr-1" />
            Updated {project.lastUpdated}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
          <div>
            <h1 className="font-headline text-3xl font-bold mb-2">Project Board</h1>
            <p className="text-muted-foreground">Manage your projects with our Kanban board</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {kanbanColumns.map((column) => {
            const projects = getProjectsByStatus(column.id)
            return (
              <div key={column.id} className="flex flex-col">
                {/* Column Header */}
                <div className={`border-t-4 ${column.color} bg-card rounded-t-lg p-4 mb-4`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-sm">{column.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {projects.length}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                </div>

                {/* Column Content */}
                <div className="flex-1 space-y-0">
                  {projects.length > 0 ? (
                    projects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))
                  ) : (
                    <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                      <p className="text-sm text-muted-foreground mb-2">No projects</p>
                      <Button variant="ghost" size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Project
                      </Button>
                    </div>
                  )}
                </div>

                {/* Drag Hint */}
                <div className="mt-4 p-2 border-2 border-dashed border-muted rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                  <p className="text-xs text-muted-foreground text-center">Drop here</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Board Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
          {kanbanColumns.map((column) => {
            const count = getProjectsByStatus(column.id).length
            return (
              <Card key={column.id} className="glass">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold">{count}</div>
                  <div className="text-sm text-muted-foreground">{column.title}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectBoard
