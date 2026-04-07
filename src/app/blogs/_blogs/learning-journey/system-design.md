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
 