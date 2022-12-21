import React from 'react';
import {Grid, Typography} from "@mui/material";
import ArtCard from "./ArtCard";

const Cards = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <Typography variant={"h3"} component={"h2"} color={"secondary"} align={"center"} gutterBottom
                        sx={{marginTop: 1}}>Rate the Kunst</Typography>
            </Grid>
            <Grid item xs={12} sm={6} display={"flex"}>
                <ArtCard
                    pathToImage={"https://malen-lernen.org/wp-content/uploads/2019/03/jan-vermeer.jpg"}
                    name={"Johannes Vermeer"}
                    text={"Jan Vermeers berühmtes Gemälde «Das Mädchen mit dem Perlenohrgehänge» ist mit Ölfarben auf Leinwand gemalt\n" +
                    "und im Barock-Stil gemalt. Die Bildkomposition ist relativ simpel: bis auf das Porträt lässt sich\n" +
                    "ansonsten kein Hintergrund oder etwas aus der Umgebung ausmachen. Vermeer hat Das Mädchen mit dem Perlenohrgehänge\n" +
                    "1665 fertiggestellt und rückte 2003 ins Zentrum der Aufmerksamkeit, als ein Oscar prämierter Film gleichen Namens\n" +
                    "in den Kinos lief."}/>
            </Grid>
            <Grid item xs={12} sm={6} display={"flex"}>
                <ArtCard
                    pathToImage={"https://malen-lernen.org/wp-content/uploads/2019/03/van-gogh-sternennacht.jpg"}
                    name={"Vincent van Gogh"}
                    text={"Vincent Van Gogh sollte jedem Kunstinteressierten ein Begriff sein. Sein Werk Sternennacht ist eines der bekanntesten Bilder überhaupt.\n" +
                    "Van Gogh malte dieses Kunstwerk 1889 im Stile des frühen Expressionismus mit Ölfarbe.\n" +
                    "Über die Entstehungsgeschichte ist kaum etwas bekannt, nur dass es in einer Zeit entstanden ist,\n" +
                    "in der van Gogh psychische Probleme hatte und in einer Nervenheilanstalt war. Zu sehen ist dieses Bild im Museum of Modern Art\n" +
                    "in New York."}/>
            </Grid>
            <Grid item xs={12} sm={6} display={"flex"}>
                <ArtCard
                    pathToImage={"https://malen-lernen.org/wp-content/uploads/2019/03/das-letzte-abendmahl.jpg"}
                    name={"Leonardo Da Vinci"}
                    text={"Das letzte Abendmahl. Es handelt sich dabei um das wohl berühmteste Wandgemälde der Welt.\n" +
                    "Für die Erstellung kam die Secco-Technik zum Einsatz, das Wandgemälde wurde 1497 durch Da Vinci fertiggestellt.\n" +
                    "Die Masse dieses imposanten Bildes beträgt 4m x 9m. Die perspektiv korrekt dargestellte Szenerie war für\n" +
                    "die damalige Zeit wegweisend. Es gab einige Versuche, die Wandmalerei zu restaurieren.\n" +
                    "Der weitere Zerfall wurde aufgehalten, weitere Schutzmassnahmen wie eine Staubschleuse sollen dafür sorgen,\n" +
                    "dass dies auch so bleibt. Eine begrenzte Anzahl BesucherInnen können im Dominikanerkloster\n" +
                    "«Santa Maria delle Grazie» in Mailand dieses einmalige Werk begutachten."}/>
            </Grid>
            <Grid item xs={12} sm={6} display={"flex"}>
                <ArtCard
                    pathToImage={"https://malen-lernen.org/wp-content/uploads/2019/03/ber%C3%BChmte-gemaelde-hokusai.jpg"}
                    name={"Katsushika Hokusai"}
                    text={"Katsushika Hokusai war ein bekannter japanischer Maler, der vor allem für seine Landschaftsbilder berühmt war.\n" +
                    "Der Holzschnitte «Die grosse Welle vor Kanagawa» ist Teil einer Serie von 46 Bildern,\n" +
                    "in der Hokusai die Landschaft rund um den Berg Fuji darstellte.\n" +
                    "Die Bilderserie ist zwischen 1829 und 1833 entstanden und erfuhr im Laufe der Zeit eine beachtliche Bekanntheit.\n" +
                    "Die grosse Welle vor Kanagawa wurde mehrfach nachgemalt bzw. interpretiert, dies interessanterweise vor allem in Europa.\n" +
                    "Es handelt sich hier um eines der bekanntesten japanischen Bilder überhaupt,\n" +
                    "weshalb es in unserer Liste mit bekannten Bildern und Gemälden nicht fehlen darf."}/>
            </Grid>
            <Grid item xs={12} sm={6} display={"flex"}>
                <ArtCard
                    pathToImage={"https://malen-lernen.org/wp-content/uploads/2019/03/gustav-klimt.jpg"}
                    name={"Gustav Klimt"}
                    text={"«Die Goldene Adele» wie das Bild auch genannt wird, ist eines der berühmtesten Gemälde des Malers Gustav Klimt.\n" +
                    "Es ist im Jugendstil gehalten und mit Ölfarben gemalt. Zusätzlich hat Klimt auch Blattgold und Blattsilber aufgebracht,\n" +
                    "wodurch eine unverwechselbare Eleganz erreicht wurde.\n" +
                    "Das Bild ist im Rahmen eines Auftrages von Ferdinand Bloch-Bauer entstanden.\n" +
                    "Die Auftragsarbeit sollte Bloch Bauers Frau zeigen. Klimt erstellte daraufhin viele Zeichnungen und Studien,\n" +
                    "bis er das eigentliche Werk erschuf. Dieses Bild erzielte bei einem Verkauf den astronomischen Preis von 135 Millionen US-Dollar."}/>
            </Grid>
            <Grid item xs={12} sm={6} display={"flex"}>
                <ArtCard
                    pathToImage={"https://upload.wikimedia.org/wikipedia/commons/a/a8/Van_Gogh_Self-Portrait_with_Straw_Hat_1887-Metropolitan.jpg"}
                    name={"Vincent van Gogh"}
                    text={" Van Gogh gilt als einer der Begründer der modernen Malerei. Als Schüler erhielt er Mal- und Zeichenunterricht\n" +
                    "von Constant Cornelis Huijsmans, später von seinem Vetter Anton Mauve. Er hinterließ über 900 Gemälde und 1000 Zeichnungen.\n" +
                    "Die Gemälde entstanden überwiegend in den letzten zehn Lebensjahren. Van Gogh führte einen umfangreichen Briefwechsel,\n" +
                    "vor allem mit seinem Bruder Theo, dem Händler seiner Bilder, der eine Fülle von Hinweisen auf sein malerisches Werk enthält.\n" +
                    "Die ersten Zeichnungen des Jugendlichen finden sich dort, und viele der Gemälde hat Vincent in seinen Briefen an Theo vorgezeichnet."}/>
            </Grid>
        </Grid>
    );
}

export default Cards;