'use client'

import * as React from "react"
import Link from "next/link"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Download, Github, Linkedin, Mail, Twitter } from "lucide-react"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

const Progress = React.forwardRef(
  ({ className, value, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    >
      <div
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  )
)
Progress.displayName = "Progress"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

export default function Component() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Portfolio</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#services" className="transition-colors hover:text-foreground/80">Services</Link>
            <Link href="#case-studies" className="transition-colors hover:text-foreground/80">Case Studies</Link>
            <Link href="#about" className="transition-colors hover:text-foreground/80">About Me</Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">Contact</Link>
            <Button>See my work</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 py-24 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Applied AI Engineer</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Building cutting-edge AI solutions by blending advanced machine learning techniques with innovative problem-solving for impactful digital transformations.
          </p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Button size="lg">View Projects</Button>
            <Button size="lg" variant="outline">Contact Me</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container px-4 py-24 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">About Me</h2>
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Versatile Data Scientist and Machine Learning Engineer with over 3 years of experience. Proven track
              record in extracting valuable insights, driving business growth through strategic solutions. Advanced
              proficiency in Python, R, and expertise in developing predictive models and optimizing algorithms.
              Specialized in crafting innovative solutions, deploying models, and fine-tuning algorithms. Dynamic
              skill set and proven experience make me a standout candidate for data science and machine learning
              roles.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Technical Skills</h3>
              <div className="space-y-2">
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Machine Learning</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Deep Learning</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Natural Language Processing (NLP)</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Computer Vision</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>AI Model Deployment</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Reinforcement Learning</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} />
                </div>
              </div>
            </div>
          </div>
          <Card className="p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Quick Info</h3>
              <div className="space-y-2">
                <p><strong>Location:</strong> Chandigarh, India</p>
                <p><strong>Experience:</strong> 2+ Years</p>
                <p><strong>Availability:</strong> Open to jobs</p>
              </div>
              <Button className="w-full" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </Card>
        </div>
      </section>


      {/* Projects Section */}
      <section id="case-studies" className="container px-4 py-24 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Knowledge Search",
              description:
                "Developed a cutting-edge search engine utilizing AI techniques for fast, accurate information retrieval. Integrated semantic search to enhance results, improving efficiency and user experience."
            },
            {
              name: "LLM Fine-Tuning",
              description:
                "Fine-tuned large language models (LLMs) to specialize in domain-specific tasks. Implemented custom datasets and optimization strategies, significantly enhancing model accuracy and performance for targeted use cases."
            },
            {
              name: "Machine Thinking Forest",
              description:
                "Designed an innovative ensemble model, 'Machine Thinking Forest,' combining decision trees with machine learning algorithms. Achieved high accuracy in complex problem-solving scenarios, pushing the boundaries of predictive analytics."
            }
          ].map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video w-full bg-muted" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Button variant="outline" className="w-full">View Case Study</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="container px-4 py-24 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-4">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>
          <Card className="p-6">
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  className="w-full p-2 border rounded-md"
                  placeholder="Your name"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  className="w-full p-2 border rounded-md"
                  placeholder="Your email"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 border rounded-md"
                  placeholder="Your message"
                  rows={4}
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  )
}