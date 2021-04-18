import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutViolenceMethodsInput } from "../inputs/RenamedcaseCreateOrConnectWithoutViolenceMethodsInput";
import { RenamedcaseCreateWithoutViolenceMethodsInput } from "../inputs/RenamedcaseCreateWithoutViolenceMethodsInput";
import { RenamedcaseUpdateWithoutViolenceMethodsInput } from "../inputs/RenamedcaseUpdateWithoutViolenceMethodsInput";
import { RenamedcaseUpsertWithoutViolenceMethodsInput } from "../inputs/RenamedcaseUpsertWithoutViolenceMethodsInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpdateOneWithoutViolenceMethodsInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutViolenceMethodsInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutViolenceMethodsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutViolenceMethodsInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutViolenceMethodsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpsertWithoutViolenceMethodsInput, {
    nullable: true
  })
  upsert?: RenamedcaseUpsertWithoutViolenceMethodsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutViolenceMethodsInput, {
    nullable: true
  })
  update?: RenamedcaseUpdateWithoutViolenceMethodsInput | undefined;
}
