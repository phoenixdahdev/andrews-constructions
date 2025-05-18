'use client'
import { useMemo, useState } from 'react'
import { useCadDrawingDetails } from '~/app/queries'
import {
  Search,
  Plus,
  Download,
  Package,
  Pencil,
  Trash,
  Info,
  Layers,
  Tag,
  Box,
} from 'lucide-react'
import { measurement } from '@prisma/client'

const Measurement = () => {
  const { data, isLoading, error } = useCadDrawingDetails()
  const [activeTab, setActiveTab] = useState('materials')

  const groupedMeasurements = useMemo(() => {
    if (!data?.data?.measurements) return {}
    return data.data.measurements.reduce(
      (acc: Record<string, measurement[]>, measurement) => {
        const category = measurement.category || 'other'
        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push(measurement)
        return acc
      },
      {}
    )
  }, [data?.data?.measurements])

  const groupedMaterials = useMemo(() => {
    if (!data?.data?.materials) return {}

    return data.data.materials.reduce(
      (
        acc: Record<
          string,
          Array<{
            id: string
            name: string
            specification: string
            quantity: number
            unit: string
          }>
        >,
        materialItem
      ) => {
        const material = materialItem.material
        const category = material?.category || 'other'
        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push({
          id: materialItem.id,
          name: material?.name || 'Unknown',
          specification: material?.specification || '-',
          quantity: materialItem.quantity,
          unit: materialItem.unit,
        })
        return acc
      },
      {}
    )
  }, [data?.data?.materials])

  const formatSize = (measurement: measurement) => {
    if (!measurement) return ''
    if (measurement.size) return measurement.size

    const value = measurement.value || 0
    const unit = measurement.unit || 'm'

    if (unit === 'm') {
      if (value < 1) {
        return `${value * 1000}mm`
      }
      return `${value}m`
    }

    return `${value}${unit}`
  }

  if (isLoading) {
    return (
      <section className="flex h-full w-full flex-col overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-black/70">
        <div className="sticky top-0 z-10 bg-white dark:bg-black/70">
          <div className="animate-pulse border-b p-4">
            <div className="h-10 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="animate-pulse overflow-x-auto border-b">
            <div className="h-10 w-full min-w-[500px] rounded bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
        <div className="space-y-4 p-6">
          <div className="animate-pulse space-y-2">
            <div className="h-20 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-20 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-20 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
      </section>
    )
  }

  if (error || !data?.success) {
    return (
      <section className="flex h-full w-full flex-col overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-black/70">
        <div className="flex h-full items-center justify-center">
          <div className="text-center text-red-500">
            <p className="text-lg font-semibold">Error loading data</p>
            <p className="text-sm">
              {data?.error || error?.message || 'Unknown error'}
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="flex h-full w-full flex-col overflow-y-auto rounded-2xl bg-white p-2 shadow-2xl dark:bg-black/70">
      <div className="sticky top-0 z-10 bg-white dark:bg-black/70">
        {/* Search bar */}
        <div className="flex items-center justify-between border-b p-4">
          <div className="relative w-full max-w-[220px]">
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search materials..."
              className="w-full rounded-md border border-gray-200 py-2 pr-4 pl-9 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Plus className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Download className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Package className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Interactive tabs - scrollable for many tabs */}
        <div className="flex overflow-x-auto border-b">
          <button
            className={`px-4 py-2 font-medium whitespace-nowrap ${
              activeTab === 'info'
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('info')}
          >
            <div className="flex items-center">
              <Info className="mr-1 h-4 w-4" />
              Document Info
            </div>
          </button>
          <button
            className={`px-4 py-2 font-medium whitespace-nowrap ${
              activeTab === 'materials'
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('materials')}
          >
            <div className="flex items-center">
              <Box className="mr-1 h-4 w-4" />
              Materials
            </div>
          </button>
          <button
            className={`px-4 py-2 font-medium whitespace-nowrap ${
              activeTab === 'measurements'
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('measurements')}
          >
            <div className="flex items-center">
              <Layers className="mr-1 h-4 w-4" />
              Measurements
            </div>
          </button>
          <button
            className={`px-4 py-2 font-medium whitespace-nowrap ${
              activeTab === 'classifications'
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('classifications')}
          >
            <div className="flex items-center">
              <Tag className="mr-1 h-4 w-4" />
              Classifications
            </div>
          </button>
          <button
            className={`px-4 py-2 font-medium whitespace-nowrap ${
              activeTab === 'features'
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('features')}
          >
            <div className="flex items-center">
              <Pencil className="mr-1 h-4 w-4" />
              Features
            </div>
          </button>
          <button
            className={`px-4 py-2 font-medium whitespace-nowrap ${
              activeTab === 'assemblies'
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('assemblies')}
          >
            <div className="flex items-center">
              <Layers className="mr-1 h-4 w-4" />
              Assemblies
            </div>
          </button>
        </div>
      </div>

      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto">
        {/* Document Info Tab */}
        {activeTab === 'info' && data?.data?.document_info && (
          <div className="p-4">
            <div className="mb-4 rounded-md bg-gray-100 px-4 py-3">
              <h3 className="font-medium text-gray-700">
                Document Information
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Title</span>
                  <span className="text-gray-800">
                    {data.data.document_info.title || '-'}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Reference</span>
                  <span className="text-gray-800">
                    {data.data.document_info.reference || '-'}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Date</span>
                  <span className="text-gray-800">
                    {data.data.document_info.date || '-'}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Revision</span>
                  <span className="text-gray-800">
                    {data.data.document_info.revision || '-'}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Author</span>
                  <span className="text-gray-800">
                    {data.data.document_info.author || '-'}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Project</span>
                  <span className="text-gray-800">
                    {data.data.document_info.project || '-'}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Client</span>
                  <span className="text-gray-800">
                    {data.data.document_info.client || '-'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Materials Tab Content */}
        {activeTab === 'materials' && (
          <>
            {Object.keys(groupedMaterials).map((category, index) => {
              const materials = groupedMaterials[category] || []
              const displayCategory = category.split('_').join(' ')
              const formattedCategory =
                displayCategory.charAt(0).toUpperCase() +
                displayCategory.slice(1)

              return (
                <div
                  key={category}
                  className={
                    index < Object.keys(groupedMaterials).length - 1
                      ? 'border-b'
                      : ''
                  }
                >
                  <div className="flex items-center justify-between bg-gray-100 px-4 py-3">
                    <h3 className="font-medium text-gray-700">
                      {formattedCategory}
                    </h3>
                    <div className="flex space-x-2">
                      <button className="text-gray-500 hover:text-gray-700">
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button className="text-gray-500 hover:text-red-500">
                        <Trash className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Table header */}
                  <div className="grid grid-cols-2 px-4 py-2 text-sm text-gray-500">
                    <div>Name</div>
                    <div>Specification</div>
                  </div>

                  {/* Table rows */}
                  {materials.length > 0 ? (
                    materials.map((material) => (
                      <div
                        key={material.id}
                        className="grid grid-cols-2 border-t px-4 py-3"
                      >
                        <div className="text-gray-800">{material.name}</div>
                        <div className="text-gray-800">
                          {material.specification}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="grid grid-cols-2 border-t px-4 py-3">
                      <div className="text-gray-800">No materials found</div>
                      <div className="text-gray-800">-</div>
                    </div>
                  )}
                </div>
              )
            })}
          </>
        )}

        {/* Measurements Tab Content */}
        {activeTab === 'measurements' && (
          <>
            {Object.keys(groupedMeasurements).map((category, index) => {
              const measurements = groupedMeasurements[category] || []
              const displayCategory = category.split('_').join(' ')
              const formattedCategory =
                displayCategory.charAt(0).toUpperCase() +
                displayCategory.slice(1)

              return (
                <div
                  key={category}
                  className={
                    index < Object.keys(groupedMeasurements).length - 1
                      ? 'border-b'
                      : ''
                  }
                >
                  <div className="flex items-center justify-between bg-gray-100 px-4 py-3">
                    <h3 className="font-medium text-gray-700">
                      {formattedCategory}
                    </h3>
                    <div className="flex space-x-2">
                      <button className="text-gray-500 hover:text-gray-700">
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button className="text-gray-500 hover:text-red-500">
                        <Trash className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Table header */}
                  <div className="grid grid-cols-2 px-4 py-2 text-sm text-gray-500">
                    <div>Name</div>
                    <div>Size</div>
                  </div>

                  {/* Table rows */}
                  {measurements.length > 0 ? (
                    measurements.map((measurement) => (
                      <div
                        key={measurement.id}
                        className="grid grid-cols-2 border-t px-4 py-3"
                      >
                        <div className="text-gray-800">{measurement.name}</div>
                        <div className="text-gray-800">
                          {formatSize(measurement)}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="grid grid-cols-2 border-t px-4 py-3">
                      <div className="text-gray-800">No measurements found</div>
                      <div className="text-gray-800">-</div>
                    </div>
                  )}
                </div>
              )
            })}
          </>
        )}

        {/* Classifications Tab Content */}
        {activeTab === 'classifications' && (
          <div className="border-b">
            <div className="flex items-center justify-between bg-gray-100 px-4 py-3">
              <h3 className="font-medium text-gray-700">Classifications</h3>
              <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-gray-700">
                  <Pencil className="h-4 w-4" />
                </button>
                <button className="text-gray-500 hover:text-red-500">
                  <Trash className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Table header */}
            <div className="grid grid-cols-3 px-4 py-2 text-sm text-gray-500">
              <div>Category</div>
              <div>Name</div>
              <div>Specification</div>
            </div>

            {/* Table rows */}
            {data?.data?.classifications &&
            data.data.classifications.length > 0 ? (
              data.data.classifications.map((classification) => (
                <div
                  key={classification.id}
                  className="grid grid-cols-3 border-t px-4 py-3"
                >
                  <div className="text-gray-800">
                    {classification.category.split('_').join(' ')}
                  </div>
                  <div className="text-gray-800">{classification.name}</div>
                  <div className="text-gray-800">
                    {classification.specification}
                  </div>
                </div>
              ))
            ) : (
              <div className="grid grid-cols-3 border-t px-4 py-3">
                <div className="text-gray-800">-</div>
                <div className="text-gray-800">No classifications found</div>
                <div className="text-gray-800">-</div>
              </div>
            )}
          </div>
        )}

        {/* Features Tab Content */}
        {activeTab === 'features' && (
          <div className="border-b">
            <div className="flex items-center justify-between bg-gray-100 px-4 py-3">
              <h3 className="font-medium text-gray-700">Features</h3>
              <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-gray-700">
                  <Pencil className="h-4 w-4" />
                </button>
                <button className="text-gray-500 hover:text-red-500">
                  <Trash className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Table header */}
            <div className="grid grid-cols-2 px-4 py-2 text-sm text-gray-500">
              <div>Name</div>
              <div>Description</div>
            </div>

            {/* Table rows */}
            {data?.data?.features && data.data.features.length > 0 ? (
              data.data.features.map((feature) => (
                <div
                  key={feature.id}
                  className="grid grid-cols-2 border-t px-4 py-3"
                >
                  <div className="text-gray-800">{feature.name}</div>
                  <div className="text-gray-800">{feature.description}</div>
                </div>
              ))
            ) : (
              <div className="grid grid-cols-2 border-t px-4 py-3">
                <div className="text-gray-800">No features found</div>
                <div className="text-gray-800">-</div>
              </div>
            )}
          </div>
        )}

        {/* Assemblies Tab Content */}
        {activeTab === 'assemblies' && (
          <div className="border-b">
            <div className="flex items-center justify-between bg-gray-100 px-4 py-3">
              <h3 className="font-medium text-gray-700">Assemblies</h3>
              <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-gray-700">
                  <Pencil className="h-4 w-4" />
                </button>
                <button className="text-gray-500 hover:text-red-500">
                  <Trash className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Table header */}
            <div className="grid grid-cols-2 px-4 py-2 text-sm text-gray-500">
              <div>Name</div>
              <div>Description</div>
            </div>

            {/* Table rows */}
            {data?.data?.assemblies && data.data.assemblies.length > 0 ? (
              data.data.assemblies.map((assembly) => (
                <div
                  key={assembly.id}
                  className="grid grid-cols-2 border-t px-4 py-3"
                >
                  <div className="text-gray-800">{assembly.name}</div>
                  <div className="text-gray-800">{assembly.description}</div>
                </div>
              ))
            ) : (
              <div className="grid grid-cols-2 border-t px-4 py-3">
                <div className="text-gray-800">No assemblies found</div>
                <div className="text-gray-800">-</div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default Measurement
