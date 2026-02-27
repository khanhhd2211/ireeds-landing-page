import Header from "@/components/header"
import Footer from "@/components/footer"
import { BookOpen } from "lucide-react"
import Image from "next/image"

export default function CoursePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-accent" strokeWidth={2} />
            <h1 className="text-4xl md:text-5xl font-serif text-foreground">Pre-Master&PhD</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-card border border-border rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">None</h2>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                  UPCOMING COURSE
                </span>
              </div>
              
              <p className="text-foreground/70 m-0">
                Currently, there is no upcoming course. We will make the announcement when the next course become available.
              </p>
            </div>

            {/* About this Course Section */}
            <div className="mt-16">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8 text-center">About this Course</h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/images/graduate.jpg"
                    alt="Graduation ceremony"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex flex-col justify-center">
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    In the VCREME's Pre-Master & Pre-PhD training program, students are provided with standardized and rigorous training covering four foundational components of economics studies, namely (1) Optimization, (2) Econometrics, (3) Microeconomics, and (4) Macroeconomics. The program enables students to develop international-level academic competencies in economics, further allowing them to take part in higher education at top foreign universities.
                  </p>
                </div>
              </div>
              
              <p className="text-foreground/80 leading-relaxed">
                Upon successful completion of this program, including the final exams, qualified students receive a certificate of completion from VCREME. Students graduating with a high distinction additionally receive a personal letter of recommendation from renowned professors in VCREME's Scientific Committee. The program aims to raise the level of economics education for Vietnamese students to meet international standards while also supporting exceptional and motivated students with increased visibility and recognition of their profiles, making it fairer for young Vietnamese talents to pursue globally competitive programs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
