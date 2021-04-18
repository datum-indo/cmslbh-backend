import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutConsultationsInput } from "../inputs/RenamedcaseCreateWithoutConsultationsInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseCreateOrConnectWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: false
  })
  where!: RenamedcaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutConsultationsInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutConsultationsInput;
}
