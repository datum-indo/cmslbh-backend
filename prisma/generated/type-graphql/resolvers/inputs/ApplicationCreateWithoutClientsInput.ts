import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateNestedManyWithoutApplicationIdInput } from "../inputs/LogRequestCreateNestedManyWithoutApplicationIdInput";
import { PersonCreateNestedOneWithoutApplicationsInput } from "../inputs/PersonCreateNestedOneWithoutApplicationsInput";
import { RenamedcaseCreateNestedOneWithoutApplicationInput } from "../inputs/RenamedcaseCreateNestedOneWithoutApplicationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApplicationCreateWithoutClientsInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dudukPerara?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  infoLbh?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  jumlahPenerimaManfaat?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  konfirmasiData!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  noReg?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pernahKlien?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pernahPpLain?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ppLain?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  regDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  relasiWakilClient?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  setujuAdvokasi!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statusPerwakilan?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  waktuPernahKlien?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  whyLbh?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tahap?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateNestedOneWithoutApplicationInput, {
    nullable: true
  })
  case?: RenamedcaseCreateNestedOneWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateNestedOneWithoutApplicationsInput, {
    nullable: true
  })
  wakilId?: PersonCreateNestedOneWithoutApplicationsInput | undefined;

  @TypeGraphQL.Field(_type => LogRequestCreateNestedManyWithoutApplicationIdInput, {
    nullable: true
  })
  LogRequest?: LogRequestCreateNestedManyWithoutApplicationIdInput | undefined;
}
