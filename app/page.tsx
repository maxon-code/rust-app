"use client";
import { useState } from "react";
import { Button } from "@heroui/button";
import {Card, CardHeader, CardBody} from "@heroui/card";



export default function Home() {
    const itemsForRaid = [
        {
            id: 1,
            title: "Сачель",
            image: "https://wiki.rustclash.com/img/skins/324/35906.png",
            price: 999,
        },
        {
            id: 2,
            title: "C4",
            image: "https://ru-wiki.rustclash.com/img/items180/explosive.timed.png",
            price: 799,
        },
        {
            id: 3,
            title: "Копьями",
            image: "https://ru-wiki.rustclash.com/img/items180/spear.wooden.png",
            price: 199,
        },
    ];

    const buildings = [
        {
            id: 1,
            title: "Металическая дверь",
            image: "https://ru-wiki.rustclash.com/img/items180/door.hinged.metal.png",
            price: 199,
        },
    ];

    const [modalType, setModalType] = useState<null | "what" | "with">(null);

    const closeModal = () => setModalType(null);

    const renderCards = (items: typeof itemsForRaid) =>
        items.map((item) => (
            <Card key={item.id} className="py-4 m-2" style={{ width: "270px" }}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">
                        {modalType === "with" ? "Средство" : "Объект"}
                    </p>
                    <small className="text-default-500">Цена: {item.price} серы</small>
                    <h4 className="font-bold text-large">{item.title}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <img
                        alt={item.title}
                        className="object-cover rounded-xl"
                        src={item.image}
                        width={270}
                    />
                </CardBody>
            </Card>
        ));

    return (
        <div style={{ padding: "2rem" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1.5rem",
                }}
            >
        <span style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Калькулятор рейда
        </span>
                <Button
                    color="primary"
                    variant="shadow"
                    style={{ fontSize: "1.25rem", padding: "0.75rem 1.5rem" }}
                    onClick={() => setModalType("with")}
                >
                    Чем рейдим?
                </Button>
                <Button
                    color="primary"
                    variant="shadow"
                    style={{ fontSize: "1.25rem", padding: "0.75rem 1.5rem" }}
                    onClick={() => setModalType("what")}
                >
                    Что рейдим?
                </Button>
            </div>

            <span style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
        С помощью данного калькулятора вы с легкостью сможете посчитать
        необходимое для рейда количество и стоимость крафта взрывчатки...
      </span>

            {modalType && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                        overflowY: "auto",
                        padding: "2rem",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "white",
                            padding: "2rem",
                            borderRadius: "1rem",
                            maxWidth: "1000px",
                            width: "90%",
                        }}
                    >
                        <h2 style={{ color: "black" }}>
                            {modalType === "with"
                                ? "Выберите предмет для рейда"
                                : "Выберите объект для рейда"}
                        </h2>

                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                            }}
                        >
                            {modalType === "with"
                                ? renderCards(itemsForRaid)
                                : renderCards(buildings)}
                        </div>

                        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                            <Button onClick={closeModal}>Закрыть</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
