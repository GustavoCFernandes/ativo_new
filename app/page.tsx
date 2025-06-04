"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Cpu, Globe, Mail, MapPin, Phone, Rocket, Shield, Smartphone, Users, Zap, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { translations, languages } from "./texts/index"

type TranslationsType = typeof translations
type LangCode = keyof TranslationsType

export default function AtivoPortfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const [currentLang, setCurrentLang] = useState<LangCode>("pt")
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  const t = translations[currentLang]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav
        className="fixed top-0 w-full z-50 backdrop-blur-md border-b"
        style={{
          backgroundColor: "rgba(20, 15, 15, 0.95)",
          borderColor: "rgba(254, 254, 254, 0.3)",
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold" style={{ color: "#FFF200" }}>
              Ativo
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <button
                  onClick={() => scrollToSection(heroRef)}
                  className="transition-colors hover:text-yellow-400"
                  style={{ color: "#D2D2D2" }}
                >
                  {t.nav.home}
                </button>
                <button
                  onClick={() => scrollToSection(servicesRef)}
                  className="transition-colors hover:text-yellow-400"
                  style={{ color: "#D2D2D2" }}
                >
                  {t.nav.services}
                </button>
                <button
                  onClick={() => scrollToSection(aboutRef)}
                  className="transition-colors hover:text-yellow-400"
                  style={{ color: "#D2D2D2" }}
                >
                  {t.nav.about}
                </button>
                <button
                  onClick={() => scrollToSection(contactRef)}
                  className="transition-colors hover:text-yellow-400"
                  style={{ color: "#D2D2D2" }}
                >
                  {t.nav.contact}
                </button>
              </div>

              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2"
                    style={{
                      borderColor: "#FFF200",
                      color: "#FFF200",
                      backgroundColor: "transparent",
                    }}
                  >
                    <Languages className="w-4 h-4" />
                    <span>{languages.find((lang) => lang.code === currentLang)?.flag}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  style={{
                    backgroundColor: "rgba(20, 15, 15, 0.95)",
                    borderColor: "rgba(254, 254, 254, 0.3)",
                  }}
                >
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setCurrentLang(lang.code as LangCode)}
                      className="flex items-center space-x-2 cursor-pointer"
                      style={{
                        color: currentLang === lang.code ? "#FFF200" : "#D2D2D2",
                      }}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Dark */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden text-white"
        style={{ background: "linear-gradient(135deg, #140f0f, #303030)" }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url('/background_img.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.25, // ajuste a transparência aqui
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8">
            {/* Logo/Title */}
            <div className="mb-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
                <span className="inline-block animate-bounce" style={{ animationDelay: "0s", color: "#FEFEFE" }}>
                  A
                </span>
                <span className="inline-block animate-bounce" style={{ animationDelay: "0.1s", color: "#FEFEFE" }}>
                  t
                </span>
                <span className="inline-block animate-bounce" style={{ animationDelay: "0.2s", color: "#FEFEFE" }}>
                  i
                </span>
                <span className="inline-block animate-bounce" style={{ animationDelay: "0.3s", color: "#FEFEFE" }}>
                  v
                </span>
                <span className="inline-block animate-bounce" style={{ animationDelay: "0.4s", color: "#FEFEFE" }}>
                  o
                </span>
                <span className="inline-block animate-bounce mx-4" style={{ animationDelay: "0.5s" }}>
                  <Zap className="inline w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" style={{ color: "#FFF200" }} />
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="w-25">
              <p className="text-lg md:text-2xl lg:text-4xl" style={{ color: "#D2D2D2" }}>
                <span className=" font-mono">
                  <strong>{t.hero.subtitle}</strong>
                </span>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-row flex-wrap md:gap-2 justify-center items-center">
              <div className="voltage-button ">
                <button style={{ color: "#D2D2D2" }} onClick={() => scrollToSection(servicesRef)}>{t.hero.servicesBtn}</button>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 234.6 61.3"
                  preserveAspectRatio="none"
                  xmlSpace="preserve"
                >
                  <filter id="glow-hero">
                    <feGaussianBlur className="blur" result="coloredBlur" stdDeviation="2"></feGaussianBlur>
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.075"
                      numOctaves="0.3"
                      result="turbulence"
                    ></feTurbulence>
                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="turbulence"
                      scale="30"
                      xChannelSelector="R"
                      yChannelSelector="G"
                      result="displace"
                    ></feDisplacementMap>
                    <feMerge>
                      <feMergeNode in="coloredBlur"></feMergeNode>
                      <feMergeNode in="coloredBlur"></feMergeNode>
                      <feMergeNode in="coloredBlur"></feMergeNode>
                      <feMergeNode in="displace"></feMergeNode>
                      <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                  </filter>
                  <path
                    className="voltage line-1"
                    d="m216.3 51.2c-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 6.8-7.3 6.8-3.7 0-3.7-4.6-7.3-4.6-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-0.9-7.3-0.9-3.7 0-3.7-2.7-7.3-2.7-3.7 0-3.7 7.8-7.3 7.8-3.7 0-3.7-4.9-7.3-4.9-3.7 0-3.7-7.8-7.3-7.8-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 3.1-7.3 3.1-3.7 0-3.7 10.9-7.3 10.9-3.7 0-3.7-12.5-7.3-12.5-3.7 0-3.7 4.6-7.3 4.6-3.7 0-3.7 4.5-7.3 4.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-10-7.3-10-3.7 0-3.7-0.4-7.3-0.4-3.7 0-3.7 2.3-7.3 2.3-3.7 0-3.7 7.1-7.3 7.1-3.7 0-3.7-11.2-7.3-11.2-3.7 0-3.7 3.5-7.3 3.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-2.9-7.3-2.9-3.7 0-3.7 8.4-7.3 8.4-3.7 0-3.7-14.6-7.3-14.6-3.7 0-3.7-5.8-7.3-5.8-2.2 0-3.8-0.4-5.5-1.5-1.8-1.1-1.8-2.9-2.9-4.8-1-1.8 1.9-2.7 1.9-4.8 0-3.4-2.1-3.4-2.1-6.8s-9.9-3.4-9.9-6.8 8-3.4 8-6.8c0-2.2 2.1-2.4 3.1-4.2 1.1-1.8 0.2-3.9 2-5 1.8-1 3.1-7.9 5.3-7.9 3.7 0 3.7 0.9 7.3 0.9 3.7 0 3.7 6.7 7.3 6.7 3.7 0 3.7-1.8 7.3-1.8 3.7 0 3.7-0.6 7.3-0.6 3.7 0 3.7-7.8 7.3-7.8h7.3c3.7 0 3.7 4.7 7.3 4.7 3.7 0 3.7-1.1 7.3-1.1 3.7 0 3.7 11.6 7.3 11.6 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-12.9 7.3-12.9 3.7 0 3.7 10.9 7.3 10.9 3.7 0 3.7 1.3 7.3 1.3 3.7 0 3.7-8.7 7.3-8.7 3.7 0 3.7 11.5 7.3 11.5 3.7 0 3.7-1.4 7.3-1.4 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-5.8 7.3-5.8 3.7 0 3.7-1.3 7.3-1.3 3.7 0 3.7 6.6 7.3 6.6s3.7-9.3 7.3-9.3c3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7 8.5 7.3 8.5 3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7-1.5 7.3-1.5 3.7 0 3.7 1.6 7.3 1.6s3.7-5.1 7.3-5.1c2.2 0 0.6 9.6 2.4 10.7s4.1-2 5.1-0.1c1 1.8 10.3 2.2 10.3 4.3 0 3.4-10.7 3.4-10.7 6.8s1.2 3.4 1.2 6.8 1.9 3.4 1.9 6.8c0 2.2-6 2.7-7 4.4-1.1 1.8 1.1 6.7-0.7 7.7-1.6 0.8-4.7-1.1-6.8-1.1z"
                    fill="transparent"
                    stroke="#fff"
                  ></path>
                  <path
                    className="voltage line-2"
                    d="m216.3 52.1c-3 0-3-0.5-6-0.5s-3 3-6 3-3-2-6-2-3 1.6-6 1.6-3-0.4-6-0.4-3-1.2-6-1.2-3 3.4-6 3.4-3-2.2-6-2.2-3-3.4-6-3.4-3-0.5-6-0.5-3 1.4-6 1.4-3 4.8-6 4.8-3-5.5-6-5.5-3 2-6 2-3 2-6 2-3 1.6-6 1.6-3-4.4-6-4.4-3-0.2-6-0.2-3 1-6 1-3 3.1-6 3.1-3-4.9-6-4.9-3 1.5-6 1.5-3 1.6-6 1.6-3-1.3-6-1.3-3 3.7-6 3.7-3-6.4-6-6.4-3 2.5-6 2.5h-6c-3 0-3-0.6-6-0.6s-3-1.4-6-1.4-3 0.9-6 0.9-3 4.3-6 4.3-3-3.5-6-3.5c-2.2 0-3.4-1.3-5.2-2.3-1.8-1.1-3.6-1.5-4.6-3.3s-4.4-3.5-4.4-5.7c0-3.4 0.4-3.4 0.4-6.8s2.9-3.4 2.9-6.8-0.8-3.4-0.8-6.8c0-2.2 0.3-4.2 1.3-5.9 1.1-1.8 0.8-6.2 2.6-7.3 1.8-1 5.5-2 7.7-2 3 0 3 2 6 2s3-0.5 6-0.5 3 5.1 6 5.1 3-1.1 6-1.1 3-5.6 6-5.6 3 4.8 6 4.8 3 0.6 6 0.6 3-3.8 6-3.8 3 5.1 6 5.1 3-0.6 6-0.6 3-1.2 6-1.2 3-2.6 6-2.6 3-0.6 6-0.6 3 2.9 6 2.9 3-4.1 6-4.1 3 0.1 6 0.1 3 3.7 6 3.7 3 0.1 6 0.1 3-0.6 6-0.6 3 0.7 6 0.7 3-2.2 6-2.2 3 4.4 6 4.4 3-1.7 6-1.7 3-4 6-4 3 4.7 6 4.7 3-0.5 6-0.5 3-0.8 6-0.8 3-3.8 6-3.8 3 6.3 6 6.3 3-4.8 6-4.8 3 1.9 6 1.9 3-1.9 6-1.9 3 1.3 6 1.3c2.2 0 5-0.5 6.7 0.5 1.8 1.1 2.4 4 3.5 5.8 1 1.8 0.3 3.7 0.3 5.9 0 3.4 3.4 3.4 3.4 6.8s-3.3 3.4-3.3 6.8 4 3.4 4 6.8c0 2.2-6 2.7-7 4.4-1.1 1.8 1.1 6.7-0.7 7.7-1.6 0.8-4.7-1.1-6.8-1.1z"
                    fill="transparent"
                    stroke="#fff"
                  ></path>
                </svg>
              </div>

              <div className="voltage-button ">
                <button className="group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-yellow-300 hover:before:[box-shadow:_20px_20px_20px_30px_#FFF200] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-1 origin-left hover:decoration-2 hover:text-yellow-300 relative bg-transparent h-16 w-64 border border-yellow-400 text-center p-3 text-yellow-400 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-yellow-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:content[''] after:bg-yellow-300 after:right-8 after:top-3 after:rounded-full after:blur-lg font-mono" style={{ color: "#D2D2D2" }} onClick={() => scrollToSection(contactRef)}>
                  {t.hero.contactBtn}
                  </button>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 234.6 61.3"
                  preserveAspectRatio="none"
                  xmlSpace="preserve"
                >
                  <filter id="glow-hero">
                    <feGaussianBlur className="blur" result="coloredBlur" stdDeviation="2"></feGaussianBlur>
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.075"
                      numOctaves="0.3"
                      result="turbulence"
                    ></feTurbulence>
                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="turbulence"
                      scale="30"
                      xChannelSelector="R"
                      yChannelSelector="G"
                      result="displace"
                    ></feDisplacementMap>
                    <feMerge>
                      <feMergeNode in="coloredBlur"></feMergeNode>
                      <feMergeNode in="coloredBlur"></feMergeNode>
                      <feMergeNode in="coloredBlur"></feMergeNode>
                      <feMergeNode in="displace"></feMergeNode>
                      <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                  </filter>
                  <path
                    className="voltage line-1"
                    d="m216.3 51.2c-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 6.8-7.3 6.8-3.7 0-3.7-4.6-7.3-4.6-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-0.9-7.3-0.9-3.7 0-3.7-2.7-7.3-2.7-3.7 0-3.7 7.8-7.3 7.8-3.7 0-3.7-4.9-7.3-4.9-3.7 0-3.7-7.8-7.3-7.8-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 3.1-7.3 3.1-3.7 0-3.7 10.9-7.3 10.9-3.7 0-3.7-12.5-7.3-12.5-3.7 0-3.7 4.6-7.3 4.6-3.7 0-3.7 4.5-7.3 4.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-10-7.3-10-3.7 0-3.7-0.4-7.3-0.4-3.7 0-3.7 2.3-7.3 2.3-3.7 0-3.7 7.1-7.3 7.1-3.7 0-3.7-11.2-7.3-11.2-3.7 0-3.7 3.5-7.3 3.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-2.9-7.3-2.9-3.7 0-3.7 8.4-7.3 8.4-3.7 0-3.7-14.6-7.3-14.6-3.7 0-3.7-5.8-7.3-5.8-2.2 0-3.8-0.4-5.5-1.5-1.8-1.1-1.8-2.9-2.9-4.8-1-1.8 1.9-2.7 1.9-4.8 0-3.4-2.1-3.4-2.1-6.8s-9.9-3.4-9.9-6.8 8-3.4 8-6.8c0-2.2 2.1-2.4 3.1-4.2 1.1-1.8 0.2-3.9 2-5 1.8-1 3.1-7.9 5.3-7.9 3.7 0 3.7 0.9 7.3 0.9 3.7 0 3.7 6.7 7.3 6.7 3.7 0 3.7-1.8 7.3-1.8 3.7 0 3.7-0.6 7.3-0.6 3.7 0 3.7-7.8 7.3-7.8h7.3c3.7 0 3.7 4.7 7.3 4.7 3.7 0 3.7-1.1 7.3-1.1 3.7 0 3.7 11.6 7.3 11.6 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-12.9 7.3-12.9 3.7 0 3.7 10.9 7.3 10.9 3.7 0 3.7 1.3 7.3 1.3 3.7 0 3.7-8.7 7.3-8.7 3.7 0 3.7 11.5 7.3 11.5 3.7 0 3.7-1.4 7.3-1.4 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-5.8 7.3-5.8 3.7 0 3.7-1.3 7.3-1.3 3.7 0 3.7 6.6 7.3 6.6s3.7-9.3 7.3-9.3c3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7 8.5 7.3 8.5 3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7-1.5 7.3-1.5 3.7 0 3.7 1.6 7.3 1.6s3.7-5.1 7.3-5.1c2.2 0 0.6 9.6 2.4 10.7s4.1-2 5.1-0.1c1 1.8 10.3 2.2 10.3 4.3 0 3.4-10.7 3.4-10.7 6.8s1.2 3.4 1.2 6.8 1.9 3.4 1.9 6.8c0 2.2-6 2.7-7 4.4-1.1 1.8 1.1 6.7-0.7 7.7-1.6 0.8-4.7-1.1-6.8-1.1z"
                    fill="transparent"
                    stroke="#fff"
                  ></path>
                  <path
                    className="voltage line-2"
                    d="m216.3 52.1c-3 0-3-0.5-6-0.5s-3 3-6 3-3-2-6-2-3 1.6-6 1.6-3-0.4-6-0.4-3-1.2-6-1.2-3 3.4-6 3.4-3-2.2-6-2.2-3-3.4-6-3.4-3-0.5-6-0.5-3 1.4-6 1.4-3 4.8-6 4.8-3-5.5-6-5.5-3 2-6 2-3 2-6 2-3 1.6-6 1.6-3-4.4-6-4.4-3-0.2-6-0.2-3 1-6 1-3 3.1-6 3.1-3-4.9-6-4.9-3 1.5-6 1.5-3 1.6-6 1.6-3-1.3-6-1.3-3 3.7-6 3.7-3-6.4-6-6.4-3 2.5-6 2.5h-6c-3 0-3-0.6-6-0.6s-3-1.4-6-1.4-3 0.9-6 0.9-3 4.3-6 4.3-3-3.5-6-3.5c-2.2 0-3.4-1.3-5.2-2.3-1.8-1.1-3.6-1.5-4.6-3.3s-4.4-3.5-4.4-5.7c0-3.4 0.4-3.4 0.4-6.8s2.9-3.4 2.9-6.8-0.8-3.4-0.8-6.8c0-2.2 0.3-4.2 1.3-5.9 1.1-1.8 0.8-6.2 2.6-7.3 1.8-1 5.5-2 7.7-2 3 0 3 2 6 2s3-0.5 6-0.5 3 5.1 6 5.1 3-1.1 6-1.1 3-5.6 6-5.6 3 4.8 6 4.8 3 0.6 6 0.6 3-3.8 6-3.8 3 5.1 6 5.1 3-0.6 6-0.6 3-1.2 6-1.2 3-2.6 6-2.6 3-0.6 6-0.6 3 2.9 6 2.9 3-4.1 6-4.1 3 0.1 6 0.1 3 3.7 6 3.7 3 0.1 6 0.1 3-0.6 6-0.6 3 0.7 6 0.7 3-2.2 6-2.2 3 4.4 6 4.4 3-1.7 6-1.7 3-4 6-4 3 4.7 6 4.7 3-0.5 6-0.5 3-0.8 6-0.8 3-3.8 6-3.8 3 6.3 6 6.3 3-4.8 6-4.8 3 1.9 6 1.9 3-1.9 6-1.9 3 1.3 6 1.3c2.2 0 5-0.5 6.7 0.5 1.8 1.1 2.4 4 3.5 5.8 1 1.8 0.3 3.7 0.3 5.9 0 3.4 3.4 3.4 3.4 6.8s-3.3 3.4-3.3 6.8 4 3.4 4 6.8c0 2.2-6 2.7-7 4.4-1.1 1.8 1.1 6.7-0.7 7.7-1.6 0.8-4.7-1.1-6.8-1.1z"
                    fill="transparent"
                    stroke="#fff"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: "#FFF200" }}>
            <div className="w-1 h-3 rounded-full mt-2 animate-pulse" style={{ backgroundColor: "#FFF200" }} />
          </div>
        </div>
      </section>

      {/* Services Section - Light */}
      <section ref={servicesRef} className="py-20 relative" style={{ background: "rgba(230, 227, 179, 0.5)" }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: "linear-gradient(to bottom,rgb(238, 225, 183), #e9ecef)",
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div
            id="services-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["services-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl font-bold mb-6 font-mono" style={{ color: "#212529" }}>
              {t.services.title}
            </h2>
            <p className="text-xl max-w-3xl mx-auto font-mono" style={{ color: "#495057" }}>
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 font-mono">
            {t.services.items.map((service, index) => (
              <Card
                key={index}
                id={`service-${index}`}
                data-animate
                className={`transition-all duration-100 hover:scale-110 hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 group ${
                  isVisible[`service-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  backgroundColor: "rgba(20, 15, 15, 0.95)",
                  borderColor: "rgba(254, 254, 254, 0.1)",
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: "rgba(255, 242, 0, 0.2) 0px 25px 50px -12px",
                }}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className="inline-flex p-4 rounded-full mb-6"
                    style={{
                      background:
                        index % 2 === 0
                          ? "linear-gradient(135deg, #FFF200, #FFF8AF)"
                          : "linear-gradient(135deg, #FFF8AF, #FEFEFE)",
                      color: "#140f0f",
                    }}
                  >
                    {
                      [
                        <Code key="code" className="w-12 h-12" />,
                        <Smartphone key="smartphone" className="w-12 h-12" />,
                        <Globe key="globe" className="w-12 h-12" />,
                        <Shield key="shield" className="w-12 h-12" />,
                        <Cpu key="cpu" className="w-12 h-12" />,
                        <Rocket key="rocket" className="w-12 h-12" />,
                      ][index]
                    }
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#FEFEFE" }}>
                    {service.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#D2D2D2" }}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div
            id="services-button"
            data-animate
            className={`text-center mt-12 transition-all duration-1000 ${
              isVisible["services-button"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="voltage-button">
              <button onClick={() => scrollToSection(contactRef)}>{t.services.quoteBtn}</button>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 234.6 61.3"
                preserveAspectRatio="none"
                xmlSpace="preserve"
              >
                <filter id="glow">
                  <feGaussianBlur className="blur" result="coloredBlur" stdDeviation="2"></feGaussianBlur>
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.075"
                    numOctaves="0.3"
                    result="turbulence"
                  ></feTurbulence>
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="turbulence"
                    scale="30"
                    xChannelSelector="R"
                    yChannelSelector="G"
                    result="displace"
                  ></feDisplacementMap>
                  <feMerge>
                    <feMergeNode in="coloredBlur"></feMergeNode>
                    <feMergeNode in="coloredBlur"></feMergeNode>
                    <feMergeNode in="coloredBlur"></feMergeNode>
                    <feMergeNode in="displace"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
                </filter>
                <path
                  className="voltage line-1"
                  d="m216.3 51.2c-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 6.8-7.3 6.8-3.7 0-3.7-4.6-7.3-4.6-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-0.9-7.3-0.9-3.7 0-3.7-2.7-7.3-2.7-3.7 0-3.7 7.8-7.3 7.8-3.7 0-3.7-4.9-7.3-4.9-3.7 0-3.7-7.8-7.3-7.8-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 3.1-7.3 3.1-3.7 0-3.7 10.9-7.3 10.9-3.7 0-3.7-12.5-7.3-12.5-3.7 0-3.7 4.6-7.3 4.6-3.7 0-3.7 4.5-7.3 4.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-10-7.3-10-3.7 0-3.7-0.4-7.3-0.4-3.7 0-3.7 2.3-7.3 2.3-3.7 0-3.7 7.1-7.3 7.1-3.7 0-3.7-11.2-7.3-11.2-3.7 0-3.7 3.5-7.3 3.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-2.9-7.3-2.9-3.7 0-3.7 8.4-7.3 8.4-3.7 0-3.7-14.6-7.3-14.6-3.7 0-3.7-5.8-7.3-5.8-2.2 0-3.8-0.4-5.5-1.5-1.8-1.1-1.8-2.9-2.9-4.8-1-1.8 1.9-2.7 1.9-4.8 0-3.4-2.1-3.4-2.1-6.8s-9.9-3.4-9.9-6.8 8-3.4 8-6.8c0-2.2 2.1-2.4 3.1-4.2 1.1-1.8 0.2-3.9 2-5 1.8-1 3.1-7.9 5.3-7.9 3.7 0 3.7 0.9 7.3 0.9 3.7 0 3.7 6.7 7.3 6.7 3.7 0 3.7-1.8 7.3-1.8 3.7 0 3.7-0.6 7.3-0.6 3.7 0 3.7-7.8 7.3-7.8h7.3c3.7 0 3.7 4.7 7.3 4.7 3.7 0 3.7-1.1 7.3-1.1 3.7 0 3.7 11.6 7.3 11.6 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-12.9 7.3-12.9 3.7 0 3.7 10.9 7.3 10.9 3.7 0 3.7 1.3 7.3 1.3 3.7 0 3.7-8.7 7.3-8.7 3.7 0 3.7 11.5 7.3 11.5 3.7 0 3.7-1.4 7.3-1.4 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-5.8 7.3-5.8 3.7 0 3.7-1.3 7.3-1.3 3.7 0 3.7 6.6 7.3 6.6s3.7-9.3 7.3-9.3c3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7 8.5 7.3 8.5 3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7-1.5 7.3-1.5 3.7 0 3.7 1.6 7.3 1.6s3.7-5.1 7.3-5.1c2.2 0 0.6 9.6 2.4 10.7s4.1-2 5.1-0.1c1 1.8 10.3 2.2 10.3 4.3 0 3.4-10.7 3.4-10.7 6.8s1.2 3.4 1.2 6.8 1.9 3.4 1.9 6.8c0 2.2-6 2.7-7 4.4-1.1 1.8 1.1 6.7-0.7 7.7-1.6 0.8-4.7-1.1-6.8-1.1z"
                  fill="transparent"
                  stroke="#FFF200"
                ></path>
                <path
                  className="voltage line-2"
                  d="m216.3 52.1c-3 0-3-0.5-6-0.5s-3 3-6 3-3-2-6-2-3 1.6-6 1.6-3-0.4-6-0.4-3-1.2-6-1.2-3 3.4-6 3.4-3-2.2-6-2.2-3-3.4-6-3.4-3-0.5-6-0.5-3 1.4-6 1.4-3 4.8-6 4.8-3-5.5-6-5.5-3 2-6 2-3 2-6 2-3 1.6-6 1.6-3-4.4-6-4.4-3-0.2-6-0.2-3 1-6 1-3 3.1-6 3.1-3-4.9-6-4.9-3 1.5-6 1.5-3 1.6-6 1.6-3-1.3-6-1.3-3 3.7-6 3.7-3-6.4-6-6.4-3 2.5-6 2.5h-6c-3 0-3-0.6-6-0.6s-3-1.4-6-1.4-3 0.9-6 0.9-3 4.3-6 4.3-3-3.5-6-3.5c-2.2 0-3.4-1.3-5.2-2.3-1.8-1.1-3.6-1.5-4.6-3.3s-4.4-3.5-4.4-5.7c0-3.4 0.4-3.4 0.4-6.8s2.9-3.4 2.9-6.8-0.8-3.4-0.8-6.8c0-2.2 0.3-4.2 1.3-5.9 1.1-1.8 0.8-6.2 2.6-7.3 1.8-1 5.5-2 7.7-2 3 0 3 2 6 2s3-0.5 6-0.5 3 5.1 6 5.1 3-1.1 6-1.1 3-5.6 6-5.6 3 4.8 6 4.8 3 0.6 6 0.6 3-3.8 6-3.8 3 5.1 6 5.1 3-0.6 6-0.6 3-1.2 6-1.2 3-2.6 6-2.6 3-0.6 6-0.6 3 2.9 6 2.9 3-4.1 6-4.1 3 0.1 6 0.1 3 3.7 6 3.7 3 0.1 6 0.1 3-0.6 6-0.6 3 0.7 6 0.7 3-2.2 6-2.2 3 4.4 6 4.4 3-1.7 6-1.7 3-4 6-4 3 4.7 6 4.7 3-0.5 6-0.5 3-0.8 6-0.8 3-3.8 6-3.8 3 6.3 6 6.3 3-4.8 6-4.8 3 1.9 6 1.9 3-1.9 6-1.9 3 1.3 6 1.3c2.2 0 5-0.5 6.7 0.5 1.8 1.1 2.4 4 3.5 5.8 1 1.8 0.3 3.7 0.3 5.9 0 3.4 3.4 3.4 3.4 6.8s-3.3 3.4-3.3 6.8 4 3.4 4 6.8c0 2.2-6 2.7-7 4.4-1.1 1.8 1.1 6.7-0.7 7.7-1.6 0.8-4.7-1.1-6.8-1.1z"
                  fill="transparent"
                  stroke="#FFF8AF"
                ></path>
              </svg>
              <div className="dots">
                <div className="dot dot-1"></div>
                <div className="dot dot-2"></div>
                <div className="dot dot-3"></div>
                <div className="dot dot-4"></div>
                <div className="dot dot-5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Dark */}
      <section
        ref={aboutRef}
        className="py-20 text-white"
        style={{ background: "linear-gradient(135deg, #140f0f, #303030)" }}
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              id="about-content"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible["about-content"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-5xl font-bold mb-8" style={{ color: "#FEFEFE" }}>
                {t.about.title}
              </h2>
              <p className="text-xl mb-6 leading-relaxed font-mono" style={{ color: "#D2D2D2" }}>
                {t.about.description1}
              </p>
              <p className="text-lg mb-8 leading-relaxed font-mono" style={{ color: "#D2D2D2" }}>
                {t.about.description2}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div
                  className="text-center p-4 rounded-lg"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div className="text-3xl font-bold mb-2" style={{ color: "#FFF200" }}>
                    50+
                  </div>
                  <div style={{ color: "#D2D2D2" }}>{t.about.projects}</div>
                </div>
                <div
                  className="text-center p-4 rounded-lg"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div className="text-3xl font-bold mb-2" style={{ color: "#FFF8AF" }}>
                    5+
                  </div>
                  <div className='font-mono' style={{ color: "#D2D2D2" }}>{t.about.experience}</div>
                </div>
              </div>
            </div>

            <div
              id="about-visual"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible["about-visual"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-30"
                  style={{ background: "linear-gradient(135deg, #FFF200, #FFF8AF)" }}
                />
                <div
                  className="relative p-8 rounded-2xl border"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div className="flex items-center mb-6">
                    <Users className="w-8 h-8 mr-3" style={{ color: "#FFF200" }} />
                    <h3 className="text-2xl font-bold" style={{ color: "#212529" }}>
                      {t.about.teamTitle}
                    </h3>
                  </div>
                  <p className="mb-6 font-mono" style={{ color: "#495057" }}>
                    {t.about.teamDescription}
                  </p>
                  <div className="space-y-4">
                    {t.about.skills.map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: "#FFF200" }} />
                        <span style={{ color: "#495057" }}>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Light */}
      <section ref={contactRef} className="py-20" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container mx-auto px-6">
          <div
            id="contact-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["contact-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl font-bold mb-6" style={{ color: "#212529" }}>
              {t.contact.title}
            </h2>
            <p className="text-xl max-w-3xl mx-auto font-mono" style={{ color: "#495057" }}>
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 font-mono">
            <div
              id="contact-info"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible["contact-info"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-3xl font-bold mb-8" style={{ color: "#212529" }}>
                {t.contact.infoTitle}
              </h3>

              <div className="space-y-6">
                <div
                  className="flex items-center p-4 rounded-lg transition-colors"
                  style={{
                    backgroundColor: "rgba(20, 15, 15, 0.95)",
                    border: "1px solid rgba(254, 254, 254, 0.1)",
                  }}
                >
                  <Mail className="w-6 h-6 mr-4" style={{ color: "#FFF200" }} />
                  <div>
                    <div className="font-semibold" style={{ color: "#FEFEFE" }}>
                      {t.contact.email}
                    </div>
                    <div style={{ color: "#D2D2D2" }}>contato@ativo.com.br</div>
                  </div>
                </div>

                <div
                  className="flex items-center p-4 rounded-lg transition-colors"
                  style={{
                    backgroundColor: "rgba(20, 15, 15, 0.95)",
                    border: "1px solid rgba(254, 254, 254, 0.1)",
                  }}
                >
                  <Phone className="w-6 h-6 mr-4" style={{ color: "#FFF8AF" }} />
                  <div>
                    <div className="font-semibold" style={{ color: "#FEFEFE" }}>
                      {t.contact.phone}
                    </div>
                    <div style={{ color: "#D2D2D2" }}>(11) 99999-9999</div>
                  </div>
                </div>

                <div
                  className="flex items-center p-4 rounded-lg transition-colors"
                  style={{
                    backgroundColor: "rgba(20, 15, 15, 0.95)",
                    border: "1px solid rgba(254, 254, 254, 0.1)",
                  }}
                >
                  <MapPin className="w-6 h-6 mr-4" style={{ color: "#FFF200" }} />
                  <div>
                    <div className="font-semibold" style={{ color: "#FEFEFE" }}>
                      {t.contact.location}
                    </div>
                    <div style={{ color: "#D2D2D2" }}>{t.contact.locationValue}</div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="contact-form"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible["contact-form"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <Card
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  borderColor: "rgba(0, 0, 0, 0.1)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#495057" }}>
                          {t.contact.form.name}
                        </label>
                        <Input
                          className="text-gray-800"
                          placeholder={t.contact.form.namePlaceholder}
                          style={{
                            backgroundColor: "rgba(248, 249, 250, 0.8)",
                            borderColor: "rgba(0, 0, 0, 0.1)",
                            color: "#212529",
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#495057" }}>
                          {t.contact.form.email}
                        </label>
                        <Input
                          className="text-gray-800"
                          placeholder={t.contact.form.emailPlaceholder}
                          style={{
                            backgroundColor: "rgba(248, 249, 250, 0.8)",
                            borderColor: "rgba(0, 0, 0, 0.1)",
                            color: "#212529",
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#495057" }}>
                        {t.contact.form.subject}
                      </label>
                      <Input
                        className="text-gray-800"
                        placeholder={t.contact.form.subjectPlaceholder}
                        style={{
                          backgroundColor: "rgba(248, 249, 250, 0.8)",
                          borderColor: "rgba(0, 0, 0, 0.1)",
                          color: "#212529",
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#495057" }}>
                        {t.contact.form.message}
                      </label>
                      <Textarea
                        className="text-gray-800 min-h-[120px]"
                        placeholder={t.contact.form.messagePlaceholder}
                        style={{
                          backgroundColor: "rgba(248, 249, 250, 0.8)",
                          borderColor: "rgba(0, 0, 0, 0.1)",
                          color: "#212529",
                        }}
                      />
                    </div>

                    <Button
                      className="w-full py-3 transition-all duration-300 text-gray-800 font-bold"
                      style={{
                        background: "linear-gradient(135deg, #FFF200, #FFF8AF)",
                        color: "#212529",
                      }}
                    >
                      {t.contact.form.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Dark */}
      <footer
        className="py-8 border-t text-white font-mono"
        style={{
          backgroundColor: "#140f0f",
          borderColor: "rgba(254, 254, 254, 0.3)",
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4" style={{ color: "#FFF200" }}>
            Ativo
          </div>
          <p style={{ color: "#D2D2D2" }}>© 2024 Ativo. {t.footer.rights}</p>
        </div>
      </footer>

      <style jsx>{`
        .typing-animation {
          display: inline-block;
          overflow: hidden;
          border-right: 2px solid #FFF200;
          white-space: nowrap;
          animation: typing 4s steps(120, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #FFF200 }
        }

        .voltage-button {
          position: relative;
          margin: 3rem auto 0;
          width: fit-content;
        }

        .voltage-button button {
          color: #140f0f;
          background: rgba(254, 254, 254, 0.075);
          padding: 1rem 3rem;
          border-radius: 5rem;
          border: 3px solid #FFF200;
          font-size: 1.2rem;
          line-height: 1em;
          letter-spacing: 0.075em;
          transition: background 0.3s;
          font-weight: bold;
        }

        .voltage-button button:hover {
          cursor: pointer;
          background: rgba(255, 242, 0, 0.2);
        }

        .voltage-button button:hover + svg, .voltage-button button:hover + svg + .dots {
          opacity: 1;
        }

        .voltage-button svg {
          display: block;
          position: absolute;
          top: -0.75em;
          left: -0.25em;
          width: calc(100% + 0.5em);
          height: calc(100% + 1.5em);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s;
          transition-delay: 0.1s;
        }

        .voltage-button svg path {
          stroke-dasharray: 100;
          filter: url("#glow");
        }

        .voltage-button svg path.line-1 {
          stroke: #FFF200;
          stroke-dashoffset: 0;
          animation: spark-1 3s linear infinite;
        }

        .voltage-button svg path.line-2 {
          stroke: #FFF8AF;
          stroke-dashoffset: 500;
          animation: spark-2 3s linear infinite;
        }

        .voltage-button .dots {
          opacity: 0;
          transition: opacity 0.3s;
          transition-delay: 0.4s;
        }

        .voltage-button .dots .dot {
          width: 1rem;
          height: 1rem;
          background: #FFF200;
          border-radius: 100%;
          position: absolute;
          opacity: 0;
        }

        .voltage-button .dots .dot-1 {
          top: 0;
          left: 20%;
          animation: fly-up 3s linear infinite;
        }

        .voltage-button .dots .dot-2 {
          top: 0;
          left: 55%;
          animation: fly-up 3s linear infinite;
          animation-delay: 0.5s;
        }

        .voltage-button .dots .dot-3 {
          top: 0;
          left: 80%;
          animation: fly-up 3s linear infinite;
          animation-delay: 1s;
        }

        .voltage-button .dots .dot-4 {
          bottom: 0;
          left: 30%;
          animation: fly-down 3s linear infinite;
          animation-delay: 2.5s;
        }

        .voltage-button .dots .dot-5 {
          bottom: 0;
          left: 65%;
          animation: fly-down 3s linear infinite;
          animation-delay: 1.5s;
        }

        @keyframes spark-1 {
          to {
            stroke-dashoffset: -1000;
          }
        }

        @keyframes spark-2 {
          to {
            stroke-dashoffset: -500;
          }
        }

        @keyframes fly-up {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.2);
          }

          5% {
            opacity: 1;
            transform: translateY(-1.5rem) scale(0.4);
          }

          10%, 100% {
            opacity: 0;
            transform: translateY(-3rem) scale(0.2);
          }
        }

        @keyframes fly-down {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.2);
          }

          5% {
            opacity: 1;
            transform: translateY(1.5rem) scale(0.4);
          }

          10%, 100% {
            opacity: 0;
            transform: translateY(3rem) scale(0.2);
          }
        }

        .card:hover {
          box-shadow: rgba(255, 242, 0, 0.4) 0px 30px 60px -12px,
            rgba(255, 242, 0, 0.3) 0px -23px 5px -23px,
            rgba(255, 242, 0, 0.2) 0px 30px 5px -22px;
          border-color: rgba(255, 242, 0, 0.5);
        }

        .fancy-btn {
          text-shadow: 0 0 5px rgba(255, 242, 0, 0.3);
          transition: all 0.5s ease;
        }

        .fancy-btn:hover {
          text-shadow: 0 0 8px rgba(255, 242, 0, 0.6);
          transform: translateY(-2px);
        }

        .fancy-btn:active {
          transform: translateY(1px);
        }
      `}</style>
    </div>
  )
}
