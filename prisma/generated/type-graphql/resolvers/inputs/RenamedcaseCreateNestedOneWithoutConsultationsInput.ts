import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutConsultationsInput } from "../inputs/RenamedcaseCreateOrConnectWithoutConsultationsInput";
import { RenamedcaseCreateWithoutConsultationsInput } from "../inputs/RenamedcaseCreateWithoutConsultationsInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseCreateNestedOneWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutConsultationsInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutConsultationsInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;
}
