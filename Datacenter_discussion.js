/*
 * ============================================================================
 * Types of Data Centers
 * Oct 4, 2026 · @Alex
 * ============================================================================
 *
 * THE MAIN CATEGORIES
 * -------------------
 * Data centers differ mainly in who owns the building, who owns the hardware,
 * and what the facility is optimized for.
 *
 * 1. Enterprise (on-premises)
 *    A company builds and runs its own facility, usually on or near its campus.
 *    - Who uses it: banks, hospitals, government agencies, universities
 *    - Why: full control over hardware, security, and compliance
 *      (rules like HIPAA for health data)
 *    - Tradeoff: expensive to build and staff, and capacity sits idle if
 *      demand drops
 *
 * 2. Colocation ("colo")
 *    A provider owns the building, power, cooling, and network. Customers rent
 *    space and bring their own servers.
 *    - Retail colo: rent a few racks or a cage
 *    - Wholesale colo: lease whole rooms or halls, usually for big tenants
 *    - Why: enterprise-grade infrastructure without building it
 *    - Examples: Equinix, Digital Realty
 *
 * 3. Hyperscale
 *    Massive facilities run by cloud and tech giants, often with tens of
 *    thousands of servers on multi-building campuses.
 *    - Operators: AWS, Microsoft, Google, Meta
 *    - What makes them different: custom-designed hardware, heavy automation,
 *      and huge economies of scale
 *    - Power draw: commonly 100+ MW per campus (a megawatt is roughly enough
 *      for several hundred homes)
 *
 * 4. Cloud data centers
 *    These overlap heavily with hyperscale. The difference is how you use
 *    them: you rent virtual compute and storage on demand instead of physical
 *    space.
 *    - Organized into regions (geographic areas) and availability zones
 *      (separate facilities within a region, so one failure doesn't take
 *      everything down)
 *
 * 5. Managed services
 *    The provider owns and operates the hardware for you, handling patching,
 *    monitoring, and backups. It sits between colo and full cloud.
 *
 * 6. Edge data centers
 *    Small facilities placed close to end users to cut latency (the delay
 *    before data arrives).
 *    - Use cases: streaming CDNs, 5G, IoT, self-driving systems, online gaming
 *    - Often located at cell towers, ISP hubs, or regional sites
 *
 * 7. Modular, micro, and containerized
 *    Prefabricated units, sometimes literally inside shipping containers,
 *    that deploy fast.
 *    - Use cases: military, disaster recovery, remote sites, temporary capacity
 *
 * 8. AI and HPC data centers
 *    The newest and fastest-growing category, built around GPU clusters for
 *    AI training and scientific computing.
 *    - Rack density: traditional racks draw roughly 5–15 kW; AI racks can hit
 *      40–100+ kW
 *    - Cooling: air can't keep up at those densities, so these sites use
 *      liquid cooling (direct-to-chip or immersion)
 *    - Networking: high-bandwidth interconnects like InfiniBand so thousands
 *      of GPUs work as one system
 *
 *
 * QUICK COMPARISON
 * ----------------
 * | Type              | Building owner | Hardware owner | Scale         | Main selling point    |
 * |-------------------|----------------|----------------|---------------|-----------------------|
 * | Enterprise        | You            | You            | Small–medium  | Control               |
 * | Colocation        | Provider       | You            | Medium–large  | Shared infrastructure |
 * | Hyperscale / Cloud| Provider       | Provider       | Massive       | Elastic scale         |
 * | Managed           | Provider       | Provider       | Varies        | Hands-off operation   |
 * | Edge              | Varies         | Varies         | Small         | Low latency           |
 * | Modular           | Varies         | Varies         | Small         | Fast deployment       |
 * | AI / HPC          | Varies         | Varies         | Large–massive | Compute density       |
 *
 *
 * RELIABILITY TIERS
 * -----------------
 * Most serious commercial facilities target Tier III; Tier IV is mostly found
 * in finance and critical infrastructure, because the cost jump from III to IV
 * is steep. The tiers come from the Uptime Institute and classify facilities
 * by redundancy.
 *
 * | Tier | Meaning                                                    | Uptime  | Max downtime/year |
 * |------|------------------------------------------------------------|---------|-------------------|
 * | I    | Basic: single path for power and cooling                   | 99.671% | ~28.8 hrs         |
 * | II   | Redundant components                                       | 99.741% | ~22 hrs           |
 * | III  | Concurrently maintainable: any part can be serviced        | 99.982% | ~1.6 hrs          |
 * |      |   without shutting down                                    |         |                   |
 * | IV   | Fault tolerant: survives any single failure                | 99.995% | ~26 min           |
 *
 * Figures are approximate, from general knowledge rather than a looked-up
 * source.
 */
