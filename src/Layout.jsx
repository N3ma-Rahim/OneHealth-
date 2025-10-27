import RoutesApp from "./RoutesApp"
import NavBar from './components/navbar'
import Footer from './components/footer'
export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header>
        <NavBar />
      </header>

      {/* Main content */}
      <main className="flex-1">
        <RoutesApp />
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
