/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Pagination from "@/components/shared/Pagination"
import { useEffect, useState } from "react"
import { Calendar, ExternalLink, AlertCircle } from "lucide-react"

interface Article {
  title: string
  description: string
  url: string
  publishedAt: string
}

const itemsPerPage = 10

export default function NewsPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true)
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=book&from=2025-04-26&sortBy=publishedAt&language=en&apiKey=aff6308a4fc946028de1a4ed46b4df98`,
        )

        if (!res.ok) {
          throw new Error("Failed to fetch news")
        }

        const data = await res.json()
        setArticles(data.articles)
      } catch (err: any) {
        setError(err.message || "Something went wrong")
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedNews = articles.slice(startIndex, startIndex + itemsPerPage)
  const totalPages = Math.ceil(articles.length / itemsPerPage)

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/3 mb-8"></div>
            <div className="space-y-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3 mb-3"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Latest Books News</h1>
          <p className="text-sm sm:text-base text-gray-600">
            Stay updated with the latest Tesla developments and announcements
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-red-800">Error loading news</h3>
              <p className="text-sm text-red-700 mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        {!error && (
          <>
            <div className="grid gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              {paginatedNews.map((article, index) => (
                <article
                  key={index}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200"
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 leading-tight">
                          <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition-colors duration-200 line-clamp-2"
                          >
                            {article.title}
                          </a>
                        </h2>

                        {article.description && (
                          <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                            {article.description}
                          </p>
                        )}

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <div className="flex items-center text-xs sm:text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                            <time dateTime={article.publishedAt}>
                              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </time>
                          </div>

                          <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200 group"
                          >
                            Read full article
                            <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {paginatedNews.length === 0 && !loading && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-500">Try refreshing the page or check back later.</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
