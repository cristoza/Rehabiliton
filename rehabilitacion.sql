PGDMP  #                    }            rehabilitacion    17.2    17.2 '    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    17756    rehabilitacion    DATABASE     �   CREATE DATABASE rehabilitacion WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Ecuador.1252';
    DROP DATABASE rehabilitacion;
                     postgres    false            �            1259    17771    disponibilidadterapistas    TABLE     H  CREATE TABLE public.disponibilidadterapistas (
    id_disponibilidad integer NOT NULL,
    id_terapista integer NOT NULL,
    dia_semana character varying(10) NOT NULL,
    hora_inicio time without time zone NOT NULL,
    hora_fin time without time zone NOT NULL,
    CONSTRAINT disponibilidadterapistas_dia_semana_check CHECK (((dia_semana)::text = ANY ((ARRAY['Lunes'::character varying, 'Martes'::character varying, 'Miercoles'::character varying, 'Jueves'::character varying, 'Viernes'::character varying, 'Sabado'::character varying, 'Domingo'::character varying])::text[])))
);
 ,   DROP TABLE public.disponibilidadterapistas;
       public         heap r       postgres    false            �            1259    17770 .   disponibilidadterapistas_id_disponibilidad_seq    SEQUENCE     �   CREATE SEQUENCE public.disponibilidadterapistas_id_disponibilidad_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 E   DROP SEQUENCE public.disponibilidadterapistas_id_disponibilidad_seq;
       public               postgres    false    220            �           0    0 .   disponibilidadterapistas_id_disponibilidad_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.disponibilidadterapistas_id_disponibilidad_seq OWNED BY public.disponibilidadterapistas.id_disponibilidad;
          public               postgres    false    219            �            1259    17784 	   pacientes    TABLE       CREATE TABLE public.pacientes (
    id_paciente integer NOT NULL,
    nombre character varying(50) NOT NULL,
    apellido character varying(50) NOT NULL,
    cedula character varying(20) NOT NULL,
    telefono character varying(20),
    email character varying(100)
);
    DROP TABLE public.pacientes;
       public         heap r       postgres    false            �            1259    17783    pacientes_id_paciente_seq    SEQUENCE     �   CREATE SEQUENCE public.pacientes_id_paciente_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.pacientes_id_paciente_seq;
       public               postgres    false    222            �           0    0    pacientes_id_paciente_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.pacientes_id_paciente_seq OWNED BY public.pacientes.id_paciente;
          public               postgres    false    221            �            1259    17795    sesiones    TABLE     E  CREATE TABLE public.sesiones (
    id_sesion integer NOT NULL,
    id_terapista integer NOT NULL,
    id_paciente integer NOT NULL,
    fecha_sesion date NOT NULL,
    hora_inicio time without time zone NOT NULL,
    hora_fin time without time zone NOT NULL,
    requiere_maquina boolean DEFAULT false,
    estado_sesion character varying(20) DEFAULT 'Agendada'::character varying,
    CONSTRAINT sesiones_estado_sesion_check CHECK (((estado_sesion)::text = ANY ((ARRAY['Agendada'::character varying, 'Completada'::character varying, 'Cancelada'::character varying])::text[])))
);
    DROP TABLE public.sesiones;
       public         heap r       postgres    false            �            1259    17794    sesiones_id_sesion_seq    SEQUENCE     �   CREATE SEQUENCE public.sesiones_id_sesion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.sesiones_id_sesion_seq;
       public               postgres    false    224            �           0    0    sesiones_id_sesion_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.sesiones_id_sesion_seq OWNED BY public.sesiones.id_sesion;
          public               postgres    false    223            �            1259    17758 
   terapistas    TABLE     B  CREATE TABLE public.terapistas (
    id_terapista integer NOT NULL,
    nombre character varying(50) NOT NULL,
    apellido character varying(50) NOT NULL,
    cedula character varying(20) NOT NULL,
    telefono character varying(20),
    email character varying(100) NOT NULL,
    especialidad character varying(100),
    fecha_contratacion date NOT NULL,
    estado character varying(10) DEFAULT 'Activo'::character varying,
    CONSTRAINT terapistas_estado_check CHECK (((estado)::text = ANY ((ARRAY['Activo'::character varying, 'Inactivo'::character varying])::text[])))
);
    DROP TABLE public.terapistas;
       public         heap r       postgres    false            �            1259    17757    terapistas_id_terapista_seq    SEQUENCE     �   CREATE SEQUENCE public.terapistas_id_terapista_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.terapistas_id_terapista_seq;
       public               postgres    false    218            �           0    0    terapistas_id_terapista_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.terapistas_id_terapista_seq OWNED BY public.terapistas.id_terapista;
          public               postgres    false    217            2           2604    17774 *   disponibilidadterapistas id_disponibilidad    DEFAULT     �   ALTER TABLE ONLY public.disponibilidadterapistas ALTER COLUMN id_disponibilidad SET DEFAULT nextval('public.disponibilidadterapistas_id_disponibilidad_seq'::regclass);
 Y   ALTER TABLE public.disponibilidadterapistas ALTER COLUMN id_disponibilidad DROP DEFAULT;
       public               postgres    false    219    220    220            3           2604    17787    pacientes id_paciente    DEFAULT     ~   ALTER TABLE ONLY public.pacientes ALTER COLUMN id_paciente SET DEFAULT nextval('public.pacientes_id_paciente_seq'::regclass);
 D   ALTER TABLE public.pacientes ALTER COLUMN id_paciente DROP DEFAULT;
       public               postgres    false    221    222    222            4           2604    17798    sesiones id_sesion    DEFAULT     x   ALTER TABLE ONLY public.sesiones ALTER COLUMN id_sesion SET DEFAULT nextval('public.sesiones_id_sesion_seq'::regclass);
 A   ALTER TABLE public.sesiones ALTER COLUMN id_sesion DROP DEFAULT;
       public               postgres    false    223    224    224            0           2604    17761    terapistas id_terapista    DEFAULT     �   ALTER TABLE ONLY public.terapistas ALTER COLUMN id_terapista SET DEFAULT nextval('public.terapistas_id_terapista_seq'::regclass);
 F   ALTER TABLE public.terapistas ALTER COLUMN id_terapista DROP DEFAULT;
       public               postgres    false    217    218    218            �          0    17771    disponibilidadterapistas 
   TABLE DATA           v   COPY public.disponibilidadterapistas (id_disponibilidad, id_terapista, dia_semana, hora_inicio, hora_fin) FROM stdin;
    public               postgres    false    220   6       �          0    17784 	   pacientes 
   TABLE DATA           [   COPY public.pacientes (id_paciente, nombre, apellido, cedula, telefono, email) FROM stdin;
    public               postgres    false    222   (6       �          0    17795    sesiones 
   TABLE DATA           �   COPY public.sesiones (id_sesion, id_terapista, id_paciente, fecha_sesion, hora_inicio, hora_fin, requiere_maquina, estado_sesion) FROM stdin;
    public               postgres    false    224   E6       �          0    17758 
   terapistas 
   TABLE DATA           �   COPY public.terapistas (id_terapista, nombre, apellido, cedula, telefono, email, especialidad, fecha_contratacion, estado) FROM stdin;
    public               postgres    false    218   b6       �           0    0 .   disponibilidadterapistas_id_disponibilidad_seq    SEQUENCE SET     ]   SELECT pg_catalog.setval('public.disponibilidadterapistas_id_disponibilidad_seq', 1, false);
          public               postgres    false    219            �           0    0    pacientes_id_paciente_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.pacientes_id_paciente_seq', 1, false);
          public               postgres    false    221            �           0    0    sesiones_id_sesion_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.sesiones_id_sesion_seq', 1, false);
          public               postgres    false    223            �           0    0    terapistas_id_terapista_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.terapistas_id_terapista_seq', 1, false);
          public               postgres    false    217            A           2606    17777 6   disponibilidadterapistas disponibilidadterapistas_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.disponibilidadterapistas
    ADD CONSTRAINT disponibilidadterapistas_pkey PRIMARY KEY (id_disponibilidad);
 `   ALTER TABLE ONLY public.disponibilidadterapistas DROP CONSTRAINT disponibilidadterapistas_pkey;
       public                 postgres    false    220            C           2606    17791    pacientes pacientes_cedula_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.pacientes
    ADD CONSTRAINT pacientes_cedula_key UNIQUE (cedula);
 H   ALTER TABLE ONLY public.pacientes DROP CONSTRAINT pacientes_cedula_key;
       public                 postgres    false    222            E           2606    17793    pacientes pacientes_email_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.pacientes
    ADD CONSTRAINT pacientes_email_key UNIQUE (email);
 G   ALTER TABLE ONLY public.pacientes DROP CONSTRAINT pacientes_email_key;
       public                 postgres    false    222            G           2606    17789    pacientes pacientes_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.pacientes
    ADD CONSTRAINT pacientes_pkey PRIMARY KEY (id_paciente);
 B   ALTER TABLE ONLY public.pacientes DROP CONSTRAINT pacientes_pkey;
       public                 postgres    false    222            I           2606    17803    sesiones sesiones_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.sesiones
    ADD CONSTRAINT sesiones_pkey PRIMARY KEY (id_sesion);
 @   ALTER TABLE ONLY public.sesiones DROP CONSTRAINT sesiones_pkey;
       public                 postgres    false    224            ;           2606    17767     terapistas terapistas_cedula_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public.terapistas
    ADD CONSTRAINT terapistas_cedula_key UNIQUE (cedula);
 J   ALTER TABLE ONLY public.terapistas DROP CONSTRAINT terapistas_cedula_key;
       public                 postgres    false    218            =           2606    17769    terapistas terapistas_email_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.terapistas
    ADD CONSTRAINT terapistas_email_key UNIQUE (email);
 I   ALTER TABLE ONLY public.terapistas DROP CONSTRAINT terapistas_email_key;
       public                 postgres    false    218            ?           2606    17765    terapistas terapistas_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.terapistas
    ADD CONSTRAINT terapistas_pkey PRIMARY KEY (id_terapista);
 D   ALTER TABLE ONLY public.terapistas DROP CONSTRAINT terapistas_pkey;
       public                 postgres    false    218            J           2606    17778 C   disponibilidadterapistas disponibilidadterapistas_id_terapista_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.disponibilidadterapistas
    ADD CONSTRAINT disponibilidadterapistas_id_terapista_fkey FOREIGN KEY (id_terapista) REFERENCES public.terapistas(id_terapista);
 m   ALTER TABLE ONLY public.disponibilidadterapistas DROP CONSTRAINT disponibilidadterapistas_id_terapista_fkey;
       public               postgres    false    218    4671    220            K           2606    17809 "   sesiones sesiones_id_paciente_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sesiones
    ADD CONSTRAINT sesiones_id_paciente_fkey FOREIGN KEY (id_paciente) REFERENCES public.pacientes(id_paciente);
 L   ALTER TABLE ONLY public.sesiones DROP CONSTRAINT sesiones_id_paciente_fkey;
       public               postgres    false    224    4679    222            L           2606    17804 #   sesiones sesiones_id_terapista_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sesiones
    ADD CONSTRAINT sesiones_id_terapista_fkey FOREIGN KEY (id_terapista) REFERENCES public.terapistas(id_terapista);
 M   ALTER TABLE ONLY public.sesiones DROP CONSTRAINT sesiones_id_terapista_fkey;
       public               postgres    false    4671    224    218            �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �     