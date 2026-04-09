# System Design

## 1. Introduction to System Design

System Design is the process of defining the architecture, components, modules, interfaces, and data flow of a system to satisfy specified requirements. It bridges the gap between software requirements and actual implementation.

{/* <img src="/TypeofSystemDesign.png" width="1300" height="200" /> */}

```mermaid

graph TD
    Title["SYSTEM DESIGN"]
    style Title fill:#1a1a2e,stroke:#16213e,stroke-width:3px,color:#fff

    Title --> HLD["HIGH-LEVEL DESIGN (HLD)"]
    Title --> LLD["LOW-LEVEL DESIGN (LLD)"]

    HLD --> HLD_What["What happens here?"]
    HLD_What --> HLD_Content["• Decide overall architecture<br>• Choose technologies (Database, Cache, Message Queue)<br>• Define how services communicate<br>• Plan for scalability & availability"]

    HLD --> HLD_Ex["Example"]
    HLD_Ex --> HLD_ExText["Designing an E-commerce System:<br>'Order Service' will talk to 'Payment Service' via REST API.<br>'Inventory Service' will emit events to Kafka."]

    LLD --> LLD_What["What happens here?"]
    LLD_What --> LLD_Content["• Write detailed logic of each function<br>• Define database schemas & indexes<br>• Create class diagrams & interfaces<br>• Handle edge cases & errors"]

    LLD --> LLD_Ex["Example"]
    LLD_Ex --> LLD_ExText["Inside 'createOrder' function:<br>1. Validate cart items<br>2. Check inventory<br>3. Process payment<br>4. Save order to DB<br>5. Return order ID"]

    style HLD fill:#e74c3c,stroke:#c0392b,stroke-width:2px,color:#fff
    style HLD_What fill:#fadbd8,stroke:#e74c3c
    style HLD_Ex fill:#fadbd8,stroke:#e74c3c
    style HLD_ExText fill:#fff,stroke:#e74c3c

    style LLD fill:#27ae60,stroke:#1e8449,stroke-width:2px,color:#fff
    style LLD_What fill:#d5f5e3,stroke:#27ae60
    style LLD_Ex fill:#d5f5e3,stroke:#27ae60
    style LLD_ExText fill:#fff,stroke:#27ae60
    
```

## 2. Architecture Types


 - Monolithic Architecture
 - Microservices Architecture
 - Serverless Architecture
 - Event-Driven Architecture
 - Layered Architecture


### 2.1. Monolithic Architecture : 
 
 > In monolithic architecture, all components and functionalities of an application — frontend, backend, and data storage logic — are tightly coupled and deployed as a single unit. It is sometimes called a Centralized System.

<br>
</br>

#### Sample Architecture:   

<br>
</br>

```mermaid
graph LR
    User["👤 User"] --> App["📦 ONE BIG APPLICATION<br>(Everything inside)"]
    App --> DB["💾 One Database"]
    
    App --> Inside["Contains:"]
    Inside --> I1["🛒 Shopping Cart"]
    Inside --> I2["💳 Payment"]
    Inside --> I3["👤 User Login"]
    Inside --> I4["📦 Orders"]
    Inside --> I5["⭐ Product Reviews"]
    Inside --> I6["🔐 Authentication"]
    Inside --> I7["📧 Email"]
    Inside --> I8["... EVERYTHING"]

    style User fill:#ffd93d,stroke:#333,stroke-width:2px
    style App fill:#e74c3c,stroke:#333,stroke-width:3px,color:#fff
    style DB fill:#3498db,stroke:#333,stroke-width:2px,color:#fff
    style Inside fill:#fff,stroke:#333
    style I1 fill:#f9e79f,stroke:#333
    style I2 fill:#f9e79f,stroke:#333
    style I3 fill:#f9e79f,stroke:#333
    style I4 fill:#f9e79f,stroke:#333
    style I5 fill:#f9e79f,stroke:#333
    style I6 fill:#f9e79f,stroke:#333
    style I7 fill:#f9e79f,stroke:#333
    style I8 fill:#f9e79f,stroke:#333

```

<br>
</br>

#### Analogy:

<br>
</br>

```mermaid

flowchart TD
    A["🏠 ONE HOUSE<br>(contains everything)"] --> B["🍕 Kitchen"]
    A --> C["🛏️ Bedroom"]
    A --> D["🚽 Bathroom"]
    A --> E["📺 Living Room"]
    A --> F["💻 Office"]
    
    G["User"] -->|"Enters"| A

    style A fill:#e74c3c,stroke:#333,stroke-width:3px,color:#fff
    style G fill:#ffd93d,stroke:#333,stroke-width:2px
    style B fill:#f9e79f,stroke:#333
    style C fill:#f9e79f,stroke:#333
    style D fill:#f9e79f,stroke:#333
    style E fill:#f9e79f,stroke:#333
    style F fill:#f9e79f,stroke:#333

```

### Advantages
   1. Simple to develop and understand — all code in one place
   2. Fewer network calls between modules (all in-process)
   3. Easier integration testing
   4. Simpler deployment — one artifact to build and ship
   5. Easier to secure — single network perimeter

### Disadvantages
   1. Difficult to scale — cannot scale individual components independently
   2. Slower development — codebase grows larger and more complex
   3. Tighter coupling — changes in one module can affect others
   4. Deployment challenges — entire application must be redeployed for any change
   5. Technology lock-in — difficult to adopt new technologies

<br>
</br>

### 2.2. Microservices Architecture :
 
 > Microservices is an evolved, more granular version of SOA where each service is completely independent — it has its own codebase, its own database, and its own deployment pipeline. Services communicate via lightweight APIs (REST, gRPC) or message queues.

<br>
</br>

#### Sample Architecture:   

<br>
</br>

```mermaid
graph LR
    User["👤 User"] --> Gateway["🚪 API Gateway"]
    
    Gateway --> S1["🛒 Shopping Cart Service"]
    Gateway --> S2["💳 Payment Service"]
    Gateway --> S3["👤 User Service"]
    Gateway --> S4["📦 Order Service"]
    Gateway --> S5["⭐ Review Service"]
    Gateway --> S6["🔐 Auth Service"]
    Gateway --> S7["📧 Email Service"]
    
    S1 --> DB1["💾 Cart DB"]
    S2 --> DB2["💾 Payment DB"]
    S3 --> DB3["💾 User DB"]
    S4 --> DB4["💾 Order DB"]
    S5 --> DB5["💾 Review DB"]
    S6 --> DB6["💾 Auth DB"]
    S7 --> DB7["💾 Email DB"]

    style User fill:#ffd93d,stroke:#333,stroke-width:2px
    style Gateway fill:#3498db,stroke:#333,stroke-width:2px,color:#fff
    style S1 fill:#e74c3c,stroke:#333,stroke-width:2px,color:#fff
    style S2 fill:#e74c3c,stroke:#333,stroke-width:2px,color:#fff
    style S3 fill:#e74c3c,stroke:#333,stroke-width:2px,color:#fff
    style S4 fill:#e74c3c,stroke:#333,stroke-width:2px,color:#fff
    style S5 fill:#e74c3c,stroke:#333,stroke-width:2px,color:#fff
    style S6 fill:#e74c3c,stroke:#333,stroke-width:2px,color:#fff
    style S7 fill:#e74c3c,stroke:#333,stroke-width:2px,color:#fff
    style DB1 fill:#2ecc71,stroke:#333,stroke-width:2px,color:#fff
    style DB2 fill:#2ecc71,stroke:#333,stroke-width:2px,color:#fff
    style DB3 fill:#2ecc71,stroke:#333,stroke-width:2px,color:#fff
    style DB4 fill:#2ecc71,stroke:#333,stroke-width:2px,color:#fff
    style DB5 fill:#2ecc71,stroke:#333,stroke-width:2px,color:#fff
    style DB6 fill:#2ecc71,stroke:#333,stroke-width:2px,color:#fff
    style DB7 fill:#2ecc71,stroke:#333,stroke-width:2px,color:#fff

```

<br>
</br>

#### Analogy:

<br>
</br>

```mermaid

flowchart TD
    A["🏢 APARTMENT BUILDING<br>(many separate apartments)"] --> B["🍕 Kitchen (Service 1)"]
    A --> C["🛏️ Bedroom (Service 2)"]
    A --> D["🚽 Bathroom (Service 3)"]
    A --> E["📺 Living Room (Service 4)"]
    A --> F["💻 Office (Service 5)"]
    
    G["User"] -->|"Enters"| A

    style A fill:#e74c3c,stroke:#333,stroke-width:3px,color:#fff
    style G fill:#ffd93d,stroke:#333,stroke-width:2px
    style B fill:#f9e79f,stroke:#333
    style C fill:#f9e79f,stroke:#333
    style D fill:#f9e79f,stroke:#333
    style E fill:#f9e79f,stroke:#333
    style F fill:#f9e79f,stroke:#333

```

### Advantages
   1. Scalability — can scale individual services independently
   2. Technology diversity — each service can use different technologies
   3. Fault isolation — failure in one service doesn't affect others
   4. Independent deployment — services can be deployed independently
   5. Easier maintenance — smaller codebases are easier to maintain

### Disadvantages
   1. Complexity — more complex to develop and manage
   2. Network latency — communication between services over network
   3. Data consistency — maintaining data consistency across services is challenging
   4. Testing complexity — integration testing is more complex
   5. Deployment complexity — more complex deployment process


### 2.3. Serverless Architecture :
 
 > Serverless doesn't mean “no servers.” It means you don’t manage servers. The cloud provider (AWS Lambda, Azure Functions, Google Cloud Functions) automatically provisions, scales, and manages the underlying infrastructure. You just upload code (functions), and the provider runs it on demand.

