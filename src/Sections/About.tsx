import Section from "../Components/Section";
import Container from "../Components/Container";
import Card from "../Components/Card";

const About = () => {
  return (
    <Section id="about" className="mt-6">
      <Container>
        <div className="text-center">
          <h4 className="font-bold text-2xl">Quienes somos</h4>
          <p>
            Somos un equipo argentino dedicado a ofrecer soluciones integrales
            en equipamiento de impresión y digitalización. Nos especializamos en
            la comercialización, alquiler y soporte de equipos multifunción,
            impresoras, fotocopiadoras y soluciones de gestión documental que
            ayudan a empresas de todos los tamaños a optimizar sus procesos de
            oficina y flujo de información con tecnología confiable.
          </p>
          <p>
            Brindamos nuestro servicio en Capital Federal y toda la provincia de
            Buenos Aires AMBA.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <Card
            image="/."
            alt="Servicio"
            title="Provisión de equipos propios"
            description="Bajo la modalidad full service, incluye la provisión de todos los equipos necesarios (impresoras, multifunción, fotocopiadoras). También incluye toners, insumos, mantenimiento, servicio tecnico y reposición."
          />
          <Card
            image="/."
            alt="Soporte"
            title="Mantenimiento de equipos"
            description="Cuando el cliente ya tiene un parque instalado y necesita que se lo mantengan bajo la modalidad full service. Aquí se puede hacer un mix entre equipos del cliente y equipos que proveamos nosotros."
          />

          <Card
            image="/."
            alt="Control de usuarios"
            title="Control de usuarios"
            description="Incluido en ciertos modelos, le permite habilitar distintos usuarios y establecer limites para el uso de los equipos ademas de sacar reportes sobre el uso del equipo."
          />

          <Card
            image="/."
            alt="Misión"
            title="Impresión segura"
            description="En caso de requerirlo, puede habilitarse un sistema de impresion segura para evitar posibles fugas de informacion utilizando un algoritmo de cifrado en los documentos a recibir."
          />
        </div>
      </Container>
    </Section>
  );
};

export default About;
